import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({userInfo, onLogout}) => {
    console.log('user : ', userInfo)
    return (
        <div>
            {userInfo === undefined ? (
                <Link to="/login">
                    <button>
                        로그인
                    </button>
                </Link>
            ) : (
                <Link onClick={onLogout}>
                    <button>
                        로그아웃
                    </button>
                </Link>
            )}
        </div>
    );
};

export default Header;