import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer-wrap">
            <div className="footer-top">
                <div className="footer-row">
                    <div className="footer-left">
                        <div className="footer-logo-top">
                            <img src="https://bookingcare.vn/assets/icon/bookingcare-2020.svg" alt="" />
                        </div>
                        <div className="footer-address">
                            <p className="name-address">Công ty Cổ phần Công nghệ BookingCare</p>
                            <p>
                                <span><i class="fa-solid fa-location-dot"></i></span> 28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
                            </p>
                            <p>
                                <span><i class="fa-solid fa-check"></i></span> ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                            </p>
                        </div>
                        <div className="footer-logo-bottom">
                            <img className="footer-logo-image" src="https://bookingcare.vn/assets/icon/bo-cong-thuong.svg" alt="" />
                            <img className="footer-logo-image" src="https://bookingcare.vn/assets/icon/bo-cong-thuong.svg" alt="" />
                        </div>
                    </div>
                    <div className="footer-middle">
                        <div className="list-item">
                            <ul className="list-wrap">
                                <li className="list-item"><a href="">Author contact</a> </li>
                                <li className="list-item"><a href="">Frequently asked</a></li>
                                <li className="list-item"><a href="">Privacy Policy</a></li>
                                <li className="list-item"><a href="">Complaint handling support process</a></li>
                                <li className="list-item"><a href="">Rules of operation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-content">
                            <p className="footer-location"> Trụ sở tại Hà Nội</p>
                            <p>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                        </div>
                        <div className="footer-content">
                            <p className="footer-location"> Văn phòng tại TP Hồ Chí Minh</p>
                            <p>6/6 Cách Mạch Tháng Tám, P. Bến Thành, Quận 1</p>
                        </div>
                        <div className="footer-content">
                            <p className="footer-location">Hỗ trợ khách hàng</p>
                            <p>support@bookingcare.vn (7h - 18h)</p>
                        </div>
                    </div>
                </div>
                <div className="footer-row download">
                    <p> <span><i class="fa-solid fa-mobile-screen-button"></i></span> Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng: <a href="" className="footer-link">Android</a> - <a href="" className="footer-link">iPhone/iPad</a> - <a href="" className="footer-link">Khác</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-row footer-bottom-wrap">
                    <p className="footer-bottom-logo">© 2022 BookingCare</p>
                    <div className="footer-bottom-social">
                        <a href=""> <img src="https://bookingcare.vn/themes/app1912/assets/img/social/facebook-square.svg" alt="" /> </a>
                        <a href=""><img src="https://bookingcare.vn/themes/app1912/assets/img/social/youtube-square.svg" alt="" /></a>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Footer;