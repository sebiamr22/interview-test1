import React from 'react';
import { Layout, RoundedImg, UserButton, UserField } from '../components';

const Page = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center w-full p-8 px-5 bg-blue-700">
        <div className="flex gap-8 items-center bg-blue-600 p-6 rounded-lg shadow-2xl">
          <RoundedImg
            src={
              'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
          />
          <div className="flex flex-col gap-6">
            <h1 className="flex items-center  text-2xl text-white font-semibold tracking-wider">
              PROFIL UTILIZATOR
            </h1>
            <div className="fields-container">
              <UserField
                dataIconName={'w-4 text-yellow-300 fa fa-user'}
                dataTitle={'Nume:'}
                data={'User_1'}
              />
              <UserField
                dataIconName={'text-yellow-300 fa fa-envelope'}
                dataTitle={'Email:'}
                data={'user1@gmail.com'}
              />
            </div>
            <div className="flex m-auto content-end gap-2 ">
              <UserButton text={'Schimbă parola'} iconName={'fa fa-key mr-1'} />
              <UserButton text={'Schimbă e-mail'} iconName={'fa fa-envelope mr-1'} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
