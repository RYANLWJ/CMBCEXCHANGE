import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'

export default class Banner extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount () {
    
        const mySwiper = new Swiper('.swiper-container', {
          autoplay: true,
          auto:5000,
          loop: true,
          pagination : {
              el: '.slidesjs-pagination-item',//焦点类名
              clickable: true,

          }
        });
  }

    render(){
        return (  <div className="banner">
        <div className="swiper-container sroll-banner swiper-container-horizontal swiper-container-autoheight">
            <div className="swiper-wrapper"
            >
                <div className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                    data-swiper-slide-index="0" ><img
                        src="http://images.cmbchina.com/cmbadv/201906/3d8bdd98-5438-41c5-9397-8bf3a342ae12.jpg"
                        width="100%" height="100%" alt="" keys="0" className="J_ScrollImgs"
                     />

                        </div>
                <div className="swiper-slide swiper-slide-duplicate-active swiper-slide-prev swiper-slide-duplicate-next"
                    data-swiper-slide-index="0" ><img
                        src="http://images.cmbchina.com/cmbadv/201906/3d8bdd98-5438-41c5-9397-8bf3a342ae12.jpg"
                        width="100%" height="100%" alt="" keys="0" className="J_ScrollImgs"
                       />

                        </div>
                <div className="swiper-slide swiper-slide-duplicate swiper-slide-active swiper-slide-duplicate-prev"
                    data-swiper-slide-index="0" ><img
                        src="http://images.cmbchina.com/cmbadv/201906/3d8bdd98-5438-41c5-9397-8bf3a342ae12.jpg"
                        width="100%" height="100%" alt="" keys="0" className="J_ScrollImgs"
                      />

                        </div>
            </div>
            <ul className="slidesjs-pagination swiper-pagination-custom">
                <li className="slidesjs-pagination-item"><a className="active"></a></li>
            </ul>
        </div>

        <div className="scroll-infos" >
            <div id="J_Scroll" mouseover="true">
                <div id="J_ScrollA">
                    <div><a
                            href="http://market.cmbchina.com/personal/sjyh_lp/new/xxtz.htm?source=banner0001">余额变动免费通知，省钱、实时、安全</a>
                        <span className="" ></span> <span className="icons icons-new"></span></div>
                    <div><a
                            href="http://95555.cmbchina.com/cmbO2O/LoanApply.aspx?loantype=1&amp;citycode=1105803&amp;fromweb=01100007570000010999">生意贷升级，无担保无抵押放款快额...</a>
                        <span className="" ></span> <span className="" ></span>
                    </div>
                </div>
                <div id="J_ScrollB">
                    <div><a
                            href="http://market.cmbchina.com/personal/sjyh_lp/new/xxtz.htm?source=banner0001">余额变动免费通知，省钱、实时、安全</a>
                        <span className="" ></span> <span className="icons icons-new"></span></div>
                    <div><a
                            href="http://95555.cmbchina.com/cmbO2O/LoanApply.aspx?loantype=1&amp;citycode=1105803&amp;fromweb=01100007570000010999">生意贷升级，无担保无抵押放款快额...</a>
                        <span className="" ></span> <span className="" ></span>
                    </div>
                </div>
            </div>
        </div>
    </div>)
    }
}