import axios from 'axios';
import CryptoJS from 'crypto-js';
import { createAsyncThunk } from '@reduxjs/toolkit';

const encryptionKey = process.env.REACT_APP_SECRET_KEY;
const BASE_URL = '/api/vi';

/** 유저정보 암호화 후 로컬스토리지에 저장 */
export const UserInfoUpdate = async ({ newPassword, newNickname }) => {
  const encryptedPassword = CryptoJS.AES.encrypt(newPassword, encryptionKey).toString();

  try {
    const storedPassword = localStorage.getItem('password');
    const storedNickname = localStorage.getItem('nickname');
    console.log(storedPassword, storedNickname);

    // 새로운 값을 로컬 스토리지에 비동기적으로 저장하기
    if (newPassword !== undefined) {
      localStorage.setItem('password', encryptedPassword);
    } else {
      localStorage.setItem('password', storedPassword);
    }

    if (newNickname !== undefined) {
      localStorage.setItem('nickname', newNickname);
    } else {
      localStorage.setItem('nickname', storedNickname);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

/** 사용자 회원정보 조회 */
export const getUserInfoAPI = createAsyncThunk('signin/inquireUserInfo', async ({ token }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/detail`, {}, { headers: { Authorization: token } });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

/** 사용자 정보(비밀번호) 변경 */
export const updatePasswordAPI = createAsyncThunk(
  'userInfoChange/updatePassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/modify`,
        { password },
        {
          headers: {
            Authorization: token,
          },
        },
      );

      return response.status;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

/** 사용자 정보(닉네임) 변경 */
export const updateNicknameAPI = createAsyncThunk(
  'userInfoChange/updateNickname',
  async ({ token, nickname }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/nickname/modify`,
        { nickname },
        { headers: { Authorization: token } },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

/** 사용자 카테고리 즐겨찾기 등록 */
export const addFavoriteAPI = createAsyncThunk(
  'userFavorite/addFavorite',
  async ({ username, categories }, { rejectWithValue }) => {
    try {
      const requests = Object.entries(categories).map(([key, category]) => {
        const { name } = category;
        const url = `${BASE_URL}/user/${key}/modify`;
        const data = {
          username,
          [`${key}_id`]: name,
        };
        console.log(data);
        return axios.post(url, data);
      });

      const responses = await Promise.all(requests);
      return responses;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
