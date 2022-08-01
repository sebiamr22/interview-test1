import React from 'react';

const UserField = ({ dataIconName, dataTitle, data }) => {
  return (
    <div className="flex items-center  gap-1 text-base">
      <i className={dataIconName} aria-hidden="true"></i>
      <h3 className="text-white font-semibold tracking-wide">{dataTitle}</h3>
      <p className=" text-slate-300">{data}</p>
    </div>
  );
};

export default UserField;
