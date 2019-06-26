import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../assets/css/home.css'
export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activeIndex:0,
            activeIdx:0,
        }
    };
    handleTab1(idx){
  
            this.setState({
                activeIdx:idx,
            })
     
    };
    handleTab2(index){
        this.setState({
            activeIndex:index,
        })
    }
    render(){
        return( <div>
             <Header/>
             <div className="mobile-body" style={{minHeight: '434px'}}>
                 <Banner/>
        <div data-v-103e1f62="" className="quick-service">
            <div data-v-103e1f62="" className="qs-row box-flex">
                <div data-v-103e1f62="" className="col-4"><a data-v-103e1f62=""
                        href="https://cmbservicedirect.weixinjia.net/mobile/index?channel=1" cname="便捷服务"
                        oname="招商银行App" otype="文字">
                        <div data-v-103e1f62="" className="iconx-52 iconx-52-tb01"></div>
                        <p data-v-103e1f62="" cname="便捷服务" oname="招商银行App" otype="文字" className="text-center">招商银行App</p>
                    </a></div>
                <div data-v-103e1f62="" className="col-4"><a data-v-103e1f62=""
                        href="http://ccclub.cmbchina.com/mca/MPreContract.aspx?WT.mc_id=N17WPGW204A9043100ZY"
                        cname="便捷服务" oname="信用卡申请" otype="文字">
                        <div data-v-103e1f62="" className="iconx-52 iconx-52-tb02"></div>
                        <p data-v-103e1f62="" cname="便捷服务" oname="信用卡申请" otype="文字" className="text-center">信用卡申请</p>
                    </a></div>
                <div data-v-103e1f62="" className="col-4"><a data-v-103e1f62=""
                        href="https://online.cmbchina.com/CmbLoanApplyWeb/Mobile/Apply.aspx?fromweb=01170001101000030002"
                        cname="便捷服务" oname="贷款申请" otype="文字">
                        <div data-v-103e1f62="" className="iconx-52 iconx-52-tb05"></div>
                        <p data-v-103e1f62="" cname="便捷服务" oname="贷款申请" otype="文字" className="text-center">贷款申请</p>
                    </a></div>
                <div data-v-103e1f62="" className="col-4"><a data-v-103e1f62="" href="http://m.trip.cmbchina.com/"
                        cname="便捷服务" oname="商旅出行" otype="文字">
                        <div data-v-103e1f62="" className="iconx-52 iconx-52-tb06"></div>
                        <p data-v-103e1f62="" cname="便捷服务" oname="商旅出行" otype="文字" className="text-center">商旅出行</p>
                    </a></div>
            </div>
            <div data-v-103e1f62="" className="qs-row box-flex">
                <div data-v-103e1f62="" className="col-4"><a data-v-103e1f62=""
                        href="https://app.cmbchina.com/DCAMobile/DApply/DSelectCard.aspx?CorperationCode=A00002GAA000000000000000pcwap0000000000000000000000000000000&amp;BranchID=102&amp;Organization=102000"
                        cname="便捷服务" oname="借记卡申请" otype="文字">
                        <div data-v-103e1f62="" className="iconx-52 iconx-52-tb13"></div>
                        <p data-v-103e1f62="" cname="便捷服务" oname="借记卡申请" otype="文字" className="text-center">借记卡申请</p>
                    </a></div>
                <div data-v-103e1f62="" className="col-4"><a data-v-103e1f62="" href="http://xyk.cmbchina.com/znwkf"
                        cname="便捷服务" oname="信用卡客服" otype="文字">
                        <div data-v-103e1f62="" className="iconx-52 iconx-52-tb04"></div>
                        <p data-v-103e1f62="" cname="便捷服务" oname="信用卡客服" otype="文字" className="text-center">信用卡客服</p>
                    </a></div>
                <div data-v-103e1f62="" className="col-4"><a data-v-103e1f62="" href="https://xyk.cmbchina.com/point/give"
                        cname="便捷服务" oname="积分乐园" otype="文字">
                        <div data-v-103e1f62="" className="iconx-52 iconx-52-tb08"></div>
                        <p data-v-103e1f62="" cname="便捷服务" oname="积分乐园" otype="文字" className="text-center">积分乐园</p>
                    </a></div>
                <div data-v-103e1f62="" className="col-4"><a data-v-103e1f62=""
                        href="http://m.cmbchina.com/Menu/DefaultSubMenu.aspx?submenu=cal" cname="便捷服务" oname="理财计算器"
                        otype="文字">
                        <div data-v-103e1f62="" className="iconx-52 iconx-52-tb07"></div>
                        <p data-v-103e1f62="" cname="便捷服务" oname="理财计算器" otype="文字" className="text-center">理财计算器</p>
                    </a></div>
            </div>
        </div>
        <div data-v-20b69184="" className="cmb-block">
            <div data-v-20b69184="" className="cmb-title">实时金融信息</div>
            <hr data-v-20b69184=""/>
            <div data-v-20b69184="" className="double-list box-flex">
                <div data-v-20b69184="" className="col-2 double-list-left">
                    <ul data-v-20b69184="" className="intime-left">
                        <li data-v-20b69184=""><a data-v-20b69184="" href="http://m.cmbchina.com/Rate/InterestRate.aspx"
                                cname="实时金融信息" oname="存款利率" otype="文字">存款利率</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184="" href="http://m.cmbchina.com/Rate/FxRealrate.aspx"
                                cname="实时金融信息" oname="外汇实时汇率" otype="文字">外汇实时汇率</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184=""
                                href="http://m.cmbchina.com/Rate/FPValue.aspx?TypeCode=01" cname="实时金融信息"
                                oname="个人理财产品净值" otype="文字">个人理财产品净值</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184=""
                                href="http://m.cmbchina.com/Rate/FPValue.aspx?TypeCode=04" cname="实时金融信息"
                                oname="银和理财产品净值" otype="文字">银和理财产品净值</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184="" href="http://m.cmbchina.com/Rate/OffshoreRate.aspx"
                                cname="实时金融信息" oname="离岸业务存款利率" otype="文字">离岸业务存款利率</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184="" href="http://m.cmbchina.com/Rate/MentalPrice.aspx"
                                cname="实时金融信息" oname="国际贵金属报价" otype="文字">国际贵金属报价</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184=""
                                href="http://m.cmbchina.com/CmbInfo/CmbStockInfo.aspx" cname="招行股价" oname="招行股价"
                                otype="文字">招行股价</a></li>
                    </ul>
                </div>
                <div data-v-20b69184="" className="col-2 double-list-right">
                    <ul data-v-20b69184="" className="intime-right">
                        <li data-v-20b69184=""><a data-v-20b69184="" href="http://m.cmbchina.com/Rate/CDRate.aspx"
                                cname="实时金融信息" oname="贷款利率" otype="文字">贷款利率</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184="" href="http://m.cmbchina.com/Rate/GoldRealrate.aspx"
                                cname="实时金融信息" oname="黄金市场行情" otype="文字">黄金市场行情</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184=""
                                href="http://m.cmbchina.com/Rate/FPValue.aspx?TypeCode=02" cname="实时金融信息"
                                oname="公司理财产品净值" otype="文字">公司理财产品净值</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184=""
                                href="http://fund.cmbchina.com/CmbMFund/Pages/FundNetValue.aspx" cname="实时金融信息"
                                oname="基金净值" otype="文字">基金净值</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184="" href="http://m.cmbchina.com/Rate/BondPrice.aspx"
                                cname="实时金融信息" oname="国债柜台交易报价" otype="文字">国债柜台交易报价</a></li>
                        <li data-v-20b69184=""><a data-v-20b69184="" href="http://m.cmbchina.com/Rate/savebondinfo.aspx"
                                cname="实时金融信息" oname="储蓄国债" otype="文字">储蓄国债</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div data-v-d258525a="" className="net-dot">
            <div data-v-d258525a="" className="cmb-title">服务网点</div>
            <hr data-v-d258525a=""/>
            <div data-v-d258525a="" className="nd-row box-flex">
                <div data-v-d258525a="" className="col-4"><a data-v-d258525a=""
                        href="http://m.cmbchina.com/Branch/CmbSubbranchSearch.aspx" cname="服务网点" oname="营业网点"
                        otype="文字">
                        <div data-v-d258525a="" className="iconx-52 iconx-52-tb09-2"></div>
                        <p data-v-d258525a="" cname="服务网点" oname="营业网点" otype="文字" className="text-center">营业网点</p>
                    </a></div>
                <div data-v-d258525a="" className="col-4"><a data-v-d258525a=""
                        href="http://m.cmbchina.com/Branch/CmbAutoBankSearch.aspx" cname="服务网点" oname="自助银行" otype="文字">
                        <div data-v-d258525a="" className="iconx-52 iconx-52-tb10-2"></div>
                        <p data-v-d258525a="" cname="服务网点" oname="自助银行" otype="文字" className="text-center">自助银行</p>
                    </a></div>
                <div data-v-d258525a="" className="col-4"><a data-v-d258525a=""
                        href="http://m.cmbchina.com/Branch/CmbAtmSearch.aspx" cname="服务网点" oname="ATM查询" otype="文字">
                        <div data-v-d258525a="" className="iconx-52 iconx-52-tb11-2"></div>
                        <p data-v-d258525a="" cname="服务网点" oname="ATM查询" otype="文字" className="text-center">ATM查询</p>
                    </a></div>
                <div data-v-d258525a="" className="col-4"><a data-v-d258525a=""
                        href="http://m.cmbchina.com/Branch/CmbSubbranchSearch.aspx" cname="服务网点" oname="排队信息"
                        otype="文字">
                        <div data-v-d258525a="" className="iconx-52 iconx-52-tb12-2"></div>
                        <p data-v-d258525a="" cname="服务网点" oname="排队信息" otype="文字" className="text-center">排队信息</p>
                    </a></div>
            </div>
        </div>
        <div data-v-31d8127e="" className="cmb-block">
            <div data-v-31d8127e="" className="cmb-title">优惠快讯</div>
            <hr data-v-31d8127e=""/>
            <div data-v-31d8127e="" className="">
                <ul data-v-31d8127e="" className="cmb-news-list">
                    <li data-v-31d8127e=""><a data-v-31d8127e=""
                            href="http://m.cmbchina.com/Personal/PromotionDetail.aspx?id=717e1601-8cfd-4b27-9b19-11a85de00520">下手就要快！1元抢一个月芒果TV会员！</a>
                    </li>
                    <li data-v-31d8127e=""><a data-v-31d8127e=""
                            href="http://m.cmbchina.com/Personal/PromotionDetail.aspx?id=16a54f2b-8b42-40fc-82e5-b07f55da18bd">下手就要快！1元抢购1个月芒果TV会员！</a>
                    </li>
                    <li data-v-31d8127e=""><a data-v-31d8127e=""
                            href="http://m.cmbchina.com/Personal/PromotionDetail.aspx?id=2fd10212-7678-4789-a582-4252ff27a39a">招行一卡通Apple
                            Pay贝贝网随机立减！最高100元！</a></li>
                    <li data-v-31d8127e=""><a data-v-31d8127e=""
                            href="http://m.cmbchina.com/Personal/PromotionDetail.aspx?id=26d5baec-3bc7-4442-a429-97b9ac9cf8a2">开通Samsung
                            Pay最高赢200元话费！</a></li>
                </ul>
                <hr data-v-31d8127e="" className="mglr-15"/> <a data-v-31d8127e=""
                    href="http://m.cmbchina.com/Personal/PromotionList.aspx" className="cmb-list-more">更多&gt;&gt;</a> <label
                    data-v-31d8127e="" className="nodata-lable"  style={{display: 'none'}}>暂无优惠快讯</label>
            </div>
        </div>
        <div data-v-e68fc7a2="" id="J_NewsBlock" className="cmb-block">
            <div data-v-e68fc7a2="" className="cmb-title">最新公告</div>
            <hr data-v-e68fc7a2=""/>
            <ul data-v-e68fc7a2="" className="cmb-news-list">
                <li data-v-e68fc7a2=""><a data-v-e68fc7a2=""
                        href="http://m.cmbchina.com/Notice/Detail.aspx?id=1aee209a-e1e4-4639-b5ff-257d0b4501df">关于广东钱端商务服务有限公司蓄意捏造事实侵害招商银行权益误导相关投资者的澄清声明</a>
                </li>
                <li data-v-e68fc7a2=""><a data-v-e68fc7a2=""
                        href="http://m.cmbchina.com/Notice/Detail.aspx?id=bfda974a-e6d1-4d79-a576-18623aec3cd0">中央第十二巡视组巡视招商局集团有限公司工作动员会召开</a>
                </li>
            </ul>
            <hr data-v-e68fc7a2="" className="mglr-15"/> <a data-v-e68fc7a2=""
                href="http://m.cmbchina.com/Notice/Default.aspx" className="cmb-list-more">更多&gt;&gt;</a> <label
                data-v-e68fc7a2="" className="nodata-lable"  style={{display: 'none'}}>暂无最新公告</label>
        </div>
        <div data-v-6b47bd9e="" id="J_NewsBlock" className="cmb-block">
            <div data-v-6b47bd9e="" className="box-flex">
                <div data-v-6b47bd9e="" onClick={this.handleTab1.bind(this,0)} className={this.state.activeIdx===0?'col-2 cmb-tab selected':'col-2 cmb-tab'}>招行新闻</div>
                <div data-v-6b47bd9e="" onClick={this.handleTab1.bind(this,1)}  className={this.state.activeIdx===1?'col-2 cmb-tab selected':'col-2 cmb-tab'}>招行公告</div>
            </div>
            <hr data-v-6b47bd9e=""/>
            <div data-v-6b47bd9e="" className="child-hide">
                <div data-v-6b47bd9e="" className={this.state.activeIdx===0?'show':null}>
                    <ul data-v-6b47bd9e="" className="cmb-news-list">
                        <li data-v-6b47bd9e=""><a data-v-6b47bd9e=""
                                href="http://m.cmbchina.com/CmbInfo/CmbNewsDetail.aspx?id=1e6fe2fb-d19c-4d6f-9736-552ea29dc8e6">招行私人银行海外布局好戏连台</a>
                        </li>
                        <li data-v-6b47bd9e=""><a data-v-6b47bd9e=""
                                href="http://m.cmbchina.com/CmbInfo/CmbNewsDetail.aspx?id=0398b219-471c-465e-a3de-15a631e15924">点亮今夏，招行少儿素养课堂演绎精彩华章</a>
                        </li>
                        <li data-v-6b47bd9e=""><a data-v-6b47bd9e=""
                                href="http://m.cmbchina.com/CmbInfo/CmbNewsDetail.aspx?id=23089a04-3655-4967-b039-45a5f5c8d097">FinTech助力
                                招行智慧营销平台获《亚洲银行家》大奖</a></li>
                        <li data-v-6b47bd9e=""><a data-v-6b47bd9e=""
                                href="http://m.cmbchina.com/CmbInfo/CmbNewsDetail.aspx?id=f40732c8-f6a0-4af1-931f-d221b1868501">王牌地位稳固
                                招行摩羯智投规模超50亿</a></li>
                    </ul>
                    <hr data-v-6b47bd9e="" className="mglr-15"/> <a data-v-6b47bd9e=""
                        href="http://m.cmbchina.com/CmbInfo/CmbNews.aspx" className="cmb-list-more">更多&gt;&gt;</a> <label
                        data-v-6b47bd9e="" className="nodata-lable"  style={{display: 'none'}}>暂无招行新闻</label>
                </div>
                <div data-v-6b47bd9e="" className={this.state.activeIdx===1?'show':null}>
                    <ul data-v-6b47bd9e="" className="cmb-news-list">
                        <li data-v-6b47bd9e=""><a data-v-6b47bd9e=""
                                href="http://m.cmbchina.com/CmbInfo/CmbAnnounceDetail.aspx?id=1854">日常关联交易公告</a></li>
                        <li data-v-6b47bd9e=""><a data-v-6b47bd9e=""
                                href="http://m.cmbchina.com/CmbInfo/CmbAnnounceDetail.aspx?id=1855">关于选举产生第十一届监事会职工监事的公告</a>
                        </li>
                        <li data-v-6b47bd9e=""><a data-v-6b47bd9e=""
                                href="http://m.cmbchina.com/CmbInfo/CmbAnnounceDetail.aspx?id=1853">[H股公告]支付H股股东2018年度末期股息的安排.pdf</a>
                        </li>
                        <li data-v-6b47bd9e=""><a data-v-6b47bd9e=""
                                href="http://m.cmbchina.com/CmbInfo/CmbAnnounceDetail.aspx?id=1852">[H股公告]50亿美元中期票据计划项下已发行6亿美元浮息票据.pdf</a>
                        </li>
                    </ul>
                    <hr data-v-6b47bd9e="" className="mglr-15"/> <a data-v-6b47bd9e=""
                        href="http://m.cmbchina.com/CmbInfo/CmbAnnouncement.aspx" className="cmb-list-more">更多&gt;&gt;</a>
                    <label data-v-6b47bd9e="" className="nodata-lable"  style={{display: 'none'}}>暂无招行公告</label>
                </div>
            </div>
        </div>
        {/* FIXME  */}
        <div data-v-567ff6b7="" id="J_FinanceBlock" className="cmb-block">
            <div data-v-567ff6b7="" className="box-flex">
                <div data-v-567ff6b7="" id="J_TabFinance" onClick={this.handleTab2.bind(this,0)} className={this.state.activeIndex===0?'col-3 cmb-tab selected':'col-3 cmb-tab '}>理财产品</div>
                <div data-v-567ff6b7="" id="J_TabFund" onClick={this.handleTab2.bind(this,1)} className={this.state.activeIndex===1?'col-3 cmb-tab selected':'col-3 cmb-tab '}>基金</div>
                <div data-v-567ff6b7="" id="J_TabGold" onClick={this.handleTab2.bind(this,2)} className={this.state.activeIndex===2?'col-3 cmb-tab selected':'col-3 cmb-tab '}>黄金</div>
            </div>
            <hr data-v-567ff6b7=""/>
            <div data-v-567ff6b7="" className="child-hide">
                <div data-v-567ff6b7="" id="J_BodyFinance" className={this.state.activeIndex===0?'show':null}>
                    <ul data-v-567ff6b7="" className="cmb-news-list">
                        <li data-v-567ff6b7=""><a data-v-567ff6b7=""
                                href="http://m.cmbchina.com/mfinanceweb/Financing/Detail.aspx?code=Q10001">挂钩黄金两层区间二个月结构性存款</a>
                        </li>
                        <li data-v-567ff6b7=""><a data-v-567ff6b7=""
                                href="http://m.cmbchina.com/mfinanceweb/Financing/Detail.aspx?code=909204">股票指数表现联动（沪深300看涨自动赎回结构）非保本理财计划</a>
                        </li>
                        <li data-v-567ff6b7=""><a data-v-567ff6b7=""
                                href="http://m.cmbchina.com/mfinanceweb/Financing/Detail.aspx?code=909200">股票指数表现联动（沪深300看跌鲨鱼鳍结构）非保本理财计划</a>
                        </li>
                        <li data-v-567ff6b7=""><a data-v-567ff6b7=""
                                href="http://m.cmbchina.com/mfinanceweb/Financing/Detail.aspx?code=909199">股票指数表现联动（沪深300看涨鲨鱼鳍结构）非保本理财计划</a>
                        </li>
                    </ul>
                    <hr data-v-567ff6b7="" className="mglr-15"/> <a data-v-567ff6b7=""
                        href="http://m.cmbchina.com/mfinanceweb/Financing/" className="cmb-list-more">更多&gt;&gt;</a> <label
                        data-v-567ff6b7="" className="nodata-lable"  style={{display: 'none'}}>暂无理财产品数据</label>
                </div>
                <div data-v-567ff6b7="" id="J_BodyFund" className={this.state.activeIndex===1?'show':null}>
                    <div data-v-567ff6b7="" className="box-flex">
                        <div data-v-567ff6b7="" className="box-flex-1 col-2">
                            <ul data-v-567ff6b7="" className="cmb-news-list">
                                <li data-v-567ff6b7=""><a data-v-567ff6b7=""
                                        href="http://fund.cmbchina.com/CmbMFund/Pages/OpenFundDetail.aspx?FundID=240018">华宝可转债</a>
                                </li>
                                <li data-v-567ff6b7=""><a data-v-567ff6b7=""
                                        href="http://fund.cmbchina.com/CmbMFund/Pages/OpenFundDetail.aspx?FundID=040009">华安收益
                                        A</a></li>
                                <li data-v-567ff6b7=""><a data-v-567ff6b7=""
                                        href="http://fund.cmbchina.com/CmbMFund/Pages/OpenFundDetail.aspx?FundID=080003">长盛积极债券</a>
                                </li>
                            </ul>
                        </div>
                        <div data-v-567ff6b7="" className="box-flex-1 col-2">
                            <ul data-v-567ff6b7="" className="cmb-news-list">
                                <li data-v-567ff6b7=""><a data-v-567ff6b7=""
                                        href="http://fund.cmbchina.com/CmbMFund/Pages/OpenFundDetail.aspx?FundID=340001">兴全可转债</a>
                                </li>
                                <li data-v-567ff6b7=""><a data-v-567ff6b7=""
                                        href="http://fund.cmbchina.com/CmbMFund/Pages/OpenFundDetail.aspx?FundID=100038">富国３００</a>
                                </li>
                                <li data-v-567ff6b7=""><a data-v-567ff6b7=""
                                        href="http://fund.cmbchina.com/CmbMFund/Pages/OpenFundDetail.aspx?FundID=110017">易增强回报
                                        A</a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-v-567ff6b7="" id="defaultMore">
                        <hr data-v-567ff6b7="" className="mglr-15"/> <a data-v-567ff6b7=""
                            href="http://fund.cmbchina.com/CmbMFund/Pages/FundQuery.aspx"
                            className="cmb-list-more">更多&gt;&gt;</a></div> <label data-v-567ff6b7="" className="nodata-lable"
                        style={{display: 'none'}}>暂无基金数据</label>
                </div>
                <div data-v-567ff6b7="" id="J_BodyGold" className={this.state.activeIndex===2?'show':null}><a data-v-567ff6b7=""
                        href="http://m.cmbchina.com/mfinanceweb/Gold/GoldProductDetail.aspx?PrdCode=FJ025GLD0003K0500">
                        <div data-v-567ff6b7="" className="box-flex fin-iterm">
                            <div data-v-567ff6b7="" className="fingold-img"><img data-v-567ff6b7=""
                                    src="http://images.cmbchina.com/GoldProduct/201707/09db580f-3fba-47f8-99bb-49efe0df4919.jpg"
                                    alt="招行金投资金条"/></div>
                            <div data-v-567ff6b7="" className="fingold-dec box-flex-1">
                                <div data-v-567ff6b7="" className="name eclipse">招行金投资金条</div>
                                <div data-v-567ff6b7="">￥<span data-v-567ff6b7="" className="price">&nbsp;165,740.00</span>
                                </div>
                            </div>
                            <div data-v-567ff6b7="" className="arrow-right pic-down-icon"></div>
                        </div>
                        <hr data-v-567ff6b7="" className="mglr-15"/>
                    </a><a data-v-567ff6b7=""
                        href="http://m.cmbchina.com/mfinanceweb/Gold/GoldProductDetail.aspx?PrdCode=FJ054GLD0018K0025">
                        <div data-v-567ff6b7="" className="box-flex fin-iterm">
                            <div data-v-567ff6b7="" className="fingold-img"><img data-v-567ff6b7=""
                                    src="http://images.cmbchina.com/GoldProduct/201707/1c66e4b7-14d6-4c8e-a9e9-b2dce1e7a48e.jpg"
                                    alt="金鸡报福五帝送财金钱套装"/></div>
                            <div data-v-567ff6b7="" className="fingold-dec box-flex-1">
                                <div data-v-567ff6b7="" className="name eclipse">金鸡报福五帝送财金钱套装</div>
                                <div data-v-567ff6b7="">￥<span data-v-567ff6b7="" className="price">&nbsp;8,899.50</span>
                                </div>
                            </div>
                            <div data-v-567ff6b7="" className="arrow-right pic-down-icon"></div>
                        </div>
              
                    </a>
                    <hr data-v-567ff6b7="" className="mglr-15"/> <a data-v-567ff6b7=""
                        href="http://m.cmbchina.com/mfinanceweb/Gold/GoldProduct.aspx"
                        className="cmb-list-more">更多&gt;&gt;</a> <label data-v-567ff6b7="" className="nodata-lable"
                        style={{display: 'none'}}>暂无黄金数据</label></div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>)
    }
}