import React from 'react';
import { useNavigate } from 'react-router-dom';
import OptionalPermission from '../components/permissionPage/OptionalPermission';
import LongButton from '../components/common/LongButton';

import {
  CAMERA,
  CAMERA_DESCRIPTION,
  CONFIRM,
  LOCATION,
  LOCATION_DESCRIPTION,
  MIKE,
  MIKE_DESCRIPTION,
  NOTIFICATION,
  NOTIFICATION_DESCRIPTION,
  PERMISSION_FIRST_TITLE,
  PERMISSION_MESSAGE,
  PERMISSION_SECOND_TITLE,
  SELECT_PERMISSION,
  STORAGE,
  STORAGE_DESCRIPTION,
} from '../static/constants';

function PermissionPage() {
  const navigate = useNavigate();
  const handleConfirm = () => {
    navigate('/register-location', { state: { before: '/permission' } });
  };

  return (
    <div className="pt-[136px] relative">
      <div className="h-[50px] pl-[16px] text-[16px] font-semibold">
        <div>
          {PERMISSION_FIRST_TITLE}
          <br />
          {PERMISSION_SECOND_TITLE}
        </div>
      </div>

      <div className="flex items-center h-[26px] mt-[26px] mb-[14px] pl-[15px] text-deepGray text-[10px]">
        {SELECT_PERMISSION}
      </div>

      <div className="flex flex-col h-[280px] pl-[15px] justify-between">
        <OptionalPermission
          svg={
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.6601 17.1816C21.1181 16.248 20.3125 13.6064 20.3125 10.1562C20.3125 8.08425 19.4894 6.09711 18.0242 4.63198C16.5591 3.16685 14.572 2.34375 12.5 2.34375C10.428 2.34375 8.44082 3.16685 6.9757 4.63198C5.51057 6.09711 4.68747 8.08425 4.68747 10.1562C4.68747 13.6074 3.88083 16.248 3.33883 17.1816C3.20043 17.419 3.12705 17.6886 3.12611 17.9634C3.12516 18.2381 3.19669 18.5083 3.33346 18.7466C3.47024 18.9849 3.66743 19.1829 3.90515 19.3206C4.14287 19.4584 4.41271 19.5311 4.68747 19.5312H8.67282C8.85306 20.4132 9.33241 21.2059 10.0298 21.7752C10.7272 22.3444 11.5997 22.6554 12.5 22.6554C13.4002 22.6554 14.2728 22.3444 14.9701 21.7752C15.6675 21.2059 16.1469 20.4132 16.3271 19.5312H20.3125C20.5871 19.5309 20.8569 19.4581 21.0944 19.3203C21.332 19.1824 21.5291 18.9844 21.6657 18.7462C21.8024 18.5079 21.8738 18.2378 21.8729 17.9631C21.8719 17.6885 21.7985 17.4189 21.6601 17.1816ZM12.5 21.0938C12.0154 21.0936 11.5428 20.9433 11.1472 20.6635C10.7516 20.3836 10.4525 19.9881 10.291 19.5312H14.709C14.5474 19.9881 14.2483 20.3836 13.8527 20.6635C13.4571 20.9433 12.9845 21.0936 12.5 21.0938ZM4.68747 17.9688C5.43942 16.6758 6.24997 13.6797 6.24997 10.1562C6.24997 8.49865 6.90845 6.90894 8.08055 5.73683C9.25265 4.56473 10.8424 3.90625 12.5 3.90625C14.1576 3.90625 15.7473 4.56473 16.9194 5.73683C18.0915 6.90894 18.75 8.49865 18.75 10.1562C18.75 13.6768 19.5586 16.6729 20.3125 17.9688H4.68747Z"
                fill="white"
              />
            </svg>
          }
          title={NOTIFICATION}
          description={NOTIFICATION_DESCRIPTION}
        />
        <OptionalPermission
          svg={
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.552 10.4167C7.552 9.1044 8.0733 7.84588 9.00121 6.91796C9.92913 5.99005 11.1876 5.46875 12.4999 5.46875C13.8122 5.46875 15.0707 5.99005 15.9986 6.91796C16.9265 7.84588 17.4478 9.1044 17.4478 10.4167C17.4478 11.7289 16.9265 12.9875 15.9986 13.9154C15.0707 14.8433 13.8122 15.3646 12.4999 15.3646C11.1876 15.3646 9.92913 14.8433 9.00121 13.9154C8.0733 12.9875 7.552 11.7289 7.552 10.4167ZM12.4999 7.03125C11.6021 7.03125 10.741 7.38793 10.1061 8.02282C9.47118 8.6577 9.1145 9.5188 9.1145 10.4167C9.1145 11.3145 9.47118 12.1756 10.1061 12.8105C10.741 13.4454 11.6021 13.8021 12.4999 13.8021C13.3978 13.8021 14.2589 13.4454 14.8938 12.8105C15.5287 12.1756 15.8853 11.3145 15.8853 10.4167C15.8853 9.5188 15.5287 8.6577 14.8938 8.02282C14.2589 7.38793 13.3978 7.03125 12.4999 7.03125Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.67078 9.22605C3.84883 7.06646 4.83247 5.0528 6.42642 3.58487C8.02036 2.11694 10.108 1.30208 12.2749 1.30209H12.7249C14.8919 1.30208 16.9795 2.11694 18.5735 3.58487C20.1674 5.0528 21.1511 7.06646 21.3291 9.22605C21.5272 11.6315 20.7841 14.0201 19.2562 15.8885L14.2635 21.9938C14.0498 22.255 13.7808 22.4656 13.4758 22.6102C13.1708 22.7547 12.8375 22.8297 12.4999 22.8297C12.1624 22.8297 11.8291 22.7547 11.5241 22.6102C11.2191 22.4656 10.9501 22.255 10.7364 21.9938L5.74369 15.8885C4.21569 14.0201 3.47253 11.6316 3.67078 9.22605ZM12.2749 2.86459C10.5004 2.86485 8.79092 3.53232 7.4857 4.7345C6.18047 5.93668 5.37498 7.58568 5.22911 9.35417C5.06411 11.3561 5.68253 13.3439 6.95411 14.899L11.9468 21.0052C12.0139 21.0874 12.0985 21.1536 12.1943 21.199C12.2902 21.2445 12.3949 21.268 12.501 21.268C12.6071 21.268 12.7118 21.2445 12.8077 21.199C12.9035 21.1536 12.988 21.0874 13.0552 21.0052L18.0479 14.899C19.3187 13.3436 19.9364 11.3558 19.7708 9.35417C19.6249 7.5855 18.8193 5.93635 17.5138 4.73415C16.2084 3.53194 14.4986 2.86459 12.7239 2.86459H12.2739H12.2749Z"
                fill="white"
              />
            </svg>
          }
          title={LOCATION}
          description={LOCATION_DESCRIPTION}
        />
        <OptionalPermission
          svg={
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.3125 5.46875H17.6055L16.2744 3.47266C16.2031 3.36577 16.1065 3.27813 15.9933 3.21749C15.88 3.15684 15.7535 3.12508 15.625 3.125H9.375C9.24651 3.12508 9.12003 3.15684 9.00675 3.21749C8.89347 3.27813 8.7969 3.36577 8.72559 3.47266L7.39355 5.46875H4.6875C4.0659 5.46875 3.46976 5.71568 3.03022 6.15522C2.59068 6.59476 2.34375 7.1909 2.34375 7.8125V18.75C2.34375 19.3716 2.59068 19.9677 3.03022 20.4073C3.46976 20.8468 4.0659 21.0938 4.6875 21.0938H20.3125C20.9341 21.0938 21.5302 20.8468 21.9698 20.4073C22.4093 19.9677 22.6562 19.3716 22.6562 18.75V7.8125C22.6562 7.1909 22.4093 6.59476 21.9698 6.15522C21.5302 5.71568 20.9341 5.46875 20.3125 5.46875ZM21.0938 18.75C21.0938 18.9572 21.0114 19.1559 20.8649 19.3024C20.7184 19.4489 20.5197 19.5312 20.3125 19.5312H4.6875C4.4803 19.5312 4.28159 19.4489 4.13507 19.3024C3.98856 19.1559 3.90625 18.9572 3.90625 18.75V7.8125C3.90625 7.6053 3.98856 7.40659 4.13507 7.26007C4.28159 7.11356 4.4803 7.03125 4.6875 7.03125H7.8125C7.94115 7.03133 8.06784 6.99964 8.1813 6.93899C8.29476 6.87835 8.39149 6.79061 8.46289 6.68359L9.79297 4.6875H15.2061L16.5371 6.68359C16.6085 6.79061 16.7052 6.87835 16.8187 6.93899C16.9322 6.99964 17.0588 7.03133 17.1875 7.03125H20.3125C20.5197 7.03125 20.7184 7.11356 20.8649 7.26007C21.0114 7.40659 21.0938 7.6053 21.0938 7.8125V18.75ZM12.5 8.59375C11.6502 8.59375 10.8194 8.84576 10.1128 9.3179C9.40617 9.79005 8.85543 10.4611 8.53021 11.2463C8.20499 12.0314 8.11989 12.8954 8.28569 13.7289C8.45148 14.5624 8.86072 15.328 9.46165 15.929C10.0626 16.5299 10.8282 16.9391 11.6617 17.1049C12.4952 17.2707 13.3592 17.1856 14.1443 16.8604C14.9295 16.5352 15.6006 15.9845 16.0727 15.2778C16.5449 14.5712 16.7969 13.7405 16.7969 12.8906C16.7956 11.7514 16.3425 10.6592 15.5369 9.8537C14.7314 9.04816 13.6392 8.59504 12.5 8.59375ZM12.5 15.625C11.9592 15.625 11.4305 15.4646 10.9809 15.1642C10.5312 14.8637 10.1807 14.4367 9.97377 13.937C9.76681 13.4374 9.71266 12.8876 9.81816 12.3572C9.92367 11.8268 10.1841 11.3395 10.5665 10.9571C10.9489 10.5747 11.4361 10.3143 11.9665 10.2088C12.497 10.1033 13.0468 10.1574 13.5464 10.3644C14.046 10.5714 14.4731 10.9218 14.7735 11.3715C15.074 11.8212 15.2344 12.3498 15.2344 12.8906C15.2344 13.6158 14.9463 14.3113 14.4335 14.8241C13.9207 15.3369 13.2252 15.625 12.5 15.625Z"
                fill="white"
              />
            </svg>
          }
          title={CAMERA}
          description={CAMERA_DESCRIPTION}
        />
        <OptionalPermission
          svg={
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.46875 10.1562C5.67595 10.1562 5.87466 10.2386 6.02118 10.3851C6.16769 10.5316 6.25 10.7303 6.25 10.9375V12.5C6.25 14.1576 6.90848 15.7473 8.08058 16.9194C9.25268 18.0915 10.8424 18.75 12.5 18.75C14.1576 18.75 15.7473 18.0915 16.9194 16.9194C18.0915 15.7473 18.75 14.1576 18.75 12.5V10.9375C18.75 10.7303 18.8323 10.5316 18.9788 10.3851C19.1253 10.2386 19.324 10.1562 19.5312 10.1562C19.7385 10.1562 19.9372 10.2386 20.0837 10.3851C20.2302 10.5316 20.3125 10.7303 20.3125 10.9375V12.5C20.3125 14.4368 19.5931 16.3045 18.2939 17.7408C16.9947 19.1772 15.2083 20.0798 13.2812 20.2734V23.4375H17.9688C18.176 23.4375 18.3747 23.5198 18.5212 23.6663C18.6677 23.8128 18.75 24.0115 18.75 24.2188C18.75 24.426 18.6677 24.6247 18.5212 24.7712C18.3747 24.9177 18.176 25 17.9688 25H7.03125C6.82405 25 6.62534 24.9177 6.47882 24.7712C6.33231 24.6247 6.25 24.426 6.25 24.2188C6.25 24.0115 6.33231 23.8128 6.47882 23.6663C6.62534 23.5198 6.82405 23.4375 7.03125 23.4375H11.7188V20.2734C9.79169 20.0798 8.00527 19.1772 6.70606 17.7408C5.40685 16.3045 4.68748 14.4368 4.6875 12.5V10.9375C4.6875 10.7303 4.76981 10.5316 4.91632 10.3851C5.06284 10.2386 5.26155 10.1562 5.46875 10.1562Z"
                fill="white"
              />
              <path
                d="M15.625 12.5C15.625 13.3288 15.2958 14.1237 14.7097 14.7097C14.1237 15.2958 13.3288 15.625 12.5 15.625C11.6712 15.625 10.8763 15.2958 10.2903 14.7097C9.70424 14.1237 9.375 13.3288 9.375 12.5V4.6875C9.375 3.8587 9.70424 3.06384 10.2903 2.47779C10.8763 1.89174 11.6712 1.5625 12.5 1.5625C13.3288 1.5625 14.1237 1.89174 14.7097 2.47779C15.2958 3.06384 15.625 3.8587 15.625 4.6875V12.5ZM12.5 0C11.2568 0 10.0645 0.49386 9.18544 1.37294C8.30636 2.25201 7.8125 3.4443 7.8125 4.6875V12.5C7.8125 13.7432 8.30636 14.9355 9.18544 15.8146C10.0645 16.6936 11.2568 17.1875 12.5 17.1875C13.7432 17.1875 14.9355 16.6936 15.8146 15.8146C16.6936 14.9355 17.1875 13.7432 17.1875 12.5V4.6875C17.1875 3.4443 16.6936 2.25201 15.8146 1.37294C14.9355 0.49386 13.7432 0 12.5 0Z"
                fill="white"
              />
            </svg>
          }
          title={MIKE}
          description={MIKE_DESCRIPTION}
        />
        <OptionalPermission
          svg={
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.3441 2.91332C19.1932 2.76243 19.014 2.64275 18.8168 2.56111C18.6197 2.47947 18.4083 2.43747 18.1949 2.4375H4.78461C4.47636 2.43743 4.17113 2.4981 3.88633 2.61603C3.60154 2.73396 3.34277 2.90684 3.1248 3.1248C2.90684 3.34277 2.73396 3.60154 2.61603 3.88633C2.4981 4.17113 2.43743 4.47636 2.4375 4.78461V21.2154C2.43743 21.5236 2.4981 21.8289 2.61603 22.1137C2.73396 22.3985 2.90684 22.6572 3.1248 22.8752C3.34277 23.0932 3.60154 23.266 3.88633 23.384C4.17113 23.5019 4.47636 23.5626 4.78461 23.5625H21.2154C21.8373 23.5606 22.4332 23.3127 22.873 22.873C23.3127 22.4332 23.5606 21.8373 23.5625 21.2154V7.80508C23.5625 7.59167 23.5205 7.38034 23.4389 7.18316C23.3572 6.98598 23.2376 6.80682 23.0867 6.6559L19.3441 2.91332ZM13 21.125C12.3572 21.125 11.7289 20.9344 11.1944 20.5773C10.6599 20.2202 10.2434 19.7126 9.99739 19.1187C9.75141 18.5249 9.68705 17.8714 9.81245 17.241C9.93785 16.6105 10.2474 16.0314 10.7019 15.5769C11.1564 15.1224 11.7355 14.8128 12.366 14.6874C12.9964 14.562 13.6499 14.6264 14.2437 14.8724C14.8376 15.1184 15.3452 15.5349 15.7023 16.0694C16.0594 16.6039 16.25 17.2322 16.25 17.875C16.2505 18.3019 16.1668 18.7248 16.0037 19.1194C15.8406 19.5139 15.6012 19.8724 15.2993 20.1743C14.9974 20.4762 14.6389 20.7156 14.2444 20.8787C13.8498 21.0418 13.4269 21.1255 13 21.125ZM15.4375 9.75H5.6875C5.47201 9.75 5.26535 9.6644 5.11298 9.51202C4.9606 9.35965 4.875 9.15299 4.875 8.9375V5.6875C4.875 5.47201 4.9606 5.26535 5.11298 5.11298C5.26535 4.9606 5.47201 4.875 5.6875 4.875H15.4375C15.653 4.875 15.8597 4.9606 16.012 5.11298C16.1644 5.26535 16.25 5.47201 16.25 5.6875V8.9375C16.25 9.15299 16.1644 9.35965 16.012 9.51202C15.8597 9.6644 15.653 9.75 15.4375 9.75Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title={STORAGE}
          description={STORAGE_DESCRIPTION}
        />
      </div>

      <div className="flex items-center w-[360px] h-[50px] mt-[26px] ml-[15px] px-[27px] rounded-[10px] bg-lightGray text-[10px] text-deepGray">
        {PERMISSION_MESSAGE}
      </div>

      <LongButton className="start-button" contents={CONFIRM} onClick={handleConfirm} />
    </div>
  );
}

export default PermissionPage;
