import React from 'react';
import { Link } from 'react-router-dom';
import Section1Component from '../home/Section1Component';

export default function CustomerTermsCondition() {
  return (
    <div id="customer">
        <Section1Component />
        <div className="container">
            <div className="top-tap__container">
                <div className="top-tap__left">
                    <Link to="/"><img src="./images/cs/house.svg" alt="메인으로" /></Link>
                </div>
                <div className="top-tap__right">
                    <p>
                        <Link to='/cs'>고객서비스</Link>
                        <span> / 사이트 이용 약관 </span>
                    </p>
                </div>
            </div>
            <div className="tap-btn__container">
                <ul className="tap-btn__box">
                    <li><Link to='/contact' className="tap__btn">연락처 & 영업시간</Link></li>
                    <li><Link to='/track-trace' className="tap__btn">배송 조회</Link></li>
                    <li><Link to='/shop-info' className="tap__btn">배송 정보</Link></li>
                    <li><Link to='/return-policy' className="tap__btn">교환 & 환불 안내</Link></li>
                    <li><Link to='/return' className="tap__btn">반품 요청 및 클레임 등록</Link></li>
                    <li><Link to='/terms-conditions' className="tap__btn">사이트 이용 약관</Link></li>
                    <li><Link to='/privacy-policy' className="tap__btn">개인 정보 보호 정책</Link></li>
                    <li><Link to='/cookies' className="tap__btn">쿠키에 대하여</Link></li>
                    <li><Link to='/faq' className="tap__btn">FAQ - 자주묻는질문</Link></li>
                </ul>
            </div>
            <div className="tap-inner__container">
                <div className="tap-inner__text">
                    <p><h1>사이트 이용 약관</h1></p>
                    <p>노르딕 네스트 AB(사업자 번호 AB SE556628-159701)는 높은 품질의 스칸디나비안 제품을 제공합니다. 고객님들께 항상 최상의 서비스를 제공하는 것이 당사의 목표입니다. 본 웹 사이트의 경우 면책 조항, 약관 및 조건과 관련하여서는 스웨덴 칼마르 연방 법을 따르고 있습니다. 약관은 아래에 규정되어 있으며, 본 한글 이용 약관은 한글 사용자의 편의를 위해 요약된 내용이므로 정확한 내용 확인을 위해서는 본사 페이지의 Terms & Conditions(<a href="!#">이용 약관 원본</a>)을 확인하시길 바랍니다. 본 개인정보 처리방침은 영어로 작성되었으며 고객의 편의를 위해 한국어로 번역되었습니다. 영어 원문과 번역본 사이에 불일치가 있을 경우 원문이 우선시 됩니다. 이용 약관에 관하여 의견이나 질문이 있으시다면 언제든지 아래의 연락처로 문의 바랍니다. </p>
                    <p>이메일: <a href="!#">info@nordicnest.kr</a> 주소: Nordic Nest AB (EU-VAT-Number: SE556628-159701) Stämpelvägen 3 SE-394 70 Kalmar SWEDEN</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>개인정보의 처리</strong></p>
                    <p>당사는 이용자가 노르딕 네스트 AB(nordicnest.kr)에 제출한 모든 정보를 존중하고 중요시합니다. 주문 처리, 배송, 보안 결제, 그리고 통관 및 관세 신고 시에 필요한 경우에서만 개인 정보를 이용합니다. 수집한 모든 정보는 본사의 <a href="!#">개인정보 정책</a>에 의거하여 관리됩니다. </p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>주문</strong></p>
                    <p>당사는 법적 구속력이 없는 온라인 카탈로그 형식으로 제품의 가격과 상세 설명을 제공합니다. 웹 사이트에 수록된 정보는 별도의 사전 고지 없이 당사에 의해 임의로 변경될 수 있습니다.</p>
                    <p>이용자는 웹 사이트에서 장바구니에 선택한 제품을 담아 구매신청이 가능합니다. 구매신청 진행 과정에서 이용자는 주문, 결제, 배송 등에 필요한 개인정보를 기입해야 하며, 이는 주문-결제 창에서 주문 확인을 위한 “안전 결제” 버튼을 클릭하기 전까지 수정이 가능합니다. “안전 결제” 버튼 클릭으로 주문이 확정되면, 이용자의 주문 정보는 주문 건에 따른 제품 구매를 위해 당사에 제공됩니다.   </p>
                    <p>이용자의 구매신청이 확인되면 당사는 이용자에게 자동 생성되는 주문확인 이메일을 발송함으로써 주문 건을 승인합니다. 주문확인 이메일은 이용자가 주문-결제 진행 중 제공한 모든 정보와 주문 제품과 제품의 가격, 배송 관련한 구체적인 정보를 포함합니다. 주문확인 이메일을 받은 이용자는 이메일에 기재된 정보가 이용자가 제공한 모든 정보와 일치하는지 확인합니다. 주문 요청 건에 변경이 필요하거나 의사표시의 불일치 등이 있을 경우 즉시 당사의 고객센터 이메일 <a href="!#">info@nordicnest.kr</a> 로 연락바랍니다. 구매계약은 영어로 체결됩니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>가격</strong></p>
                    <p>주문 시 사이트에 게시된 가격이 적용됩니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>EU 회원국 거주자</strong></p>
                    <p>노르딕네스트 AB에서 제공하는 모든 제품의 가격은 VAT(부가가치세) 포함 가격이며, 청구서에 물품 대금과 세금이 모두 기재됩니다. <br />해당 지역의 부가가치세가 다음 국가의 경우에 부과됩니다: 핀란드, 독일, 덴마크, 노르웨이, 네덜란드, 프랑스, 스페인, 영국. </p>
                    <p>총 지불 금액은 물품 대금과 필요한 경우, 배송요금을 포함합니다. 총 지불 금액은 주문 확정 전, 이용자가 물품 배송 목적지를 설정하는 즉시 주문-결제 창에서 확인 가능합니다. 웹 사이트에 기재된 물품 가격은 이용자의 편의를 위하여 이용자가 사용하는 통화 단위로 자동으로 변환되어 표기됩니다. 이는 이용자가 사용하는 컴퓨터의 IP주소를 통해 이루어집니다. 당사 웹 사이트가 제공하는 통화 단위는 유로(EUR), 미국달러(USD), 영국프랑(GBP), 덴마크 크로네(DKK), 노르웨이 크로네(NOK), 스웨덴 크로나(SEK)와 대한민국 원화(KRW)입니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>EU 비회원국 거주자</strong></p>
                    <p>EU 비회원 국가에서 당사의 웹 사이트에 접속하는 경우, 혹은 이용자의 컴퓨터 서버가 EU 비회원 국가에 위치한 경우, 당사의 웹 사이트는 VAT와 소비세를 제외한 물품 가격을 제공합니다. 이와 같은 경우에 이용자는 관세와 이용자가 물품을 배송 받는 국가의 정책에 따라 부과되는 (일반적으로 매우 적은) 통관 수수료를 지불합니다. (노르웨이로 배송되는 주문 건에는 해당되지 않습니다.) 배송 업체에서 이용자에게 부과하는 추가부담금이 있을 수 있습니다. EU 비회원 국가 거주자에게는 물품 가격은 미국달러(USD) 또는 대한민국 원화(KRW)로 표기되며, 스위스에 거주하는 이용자에게는 유로화(EUR)로 표기됩니다.</p>
                    <p>이와 관련된 더 많은 정보에 관해서는 해당 국가 관세 사무소로 문의하시기 바랍니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>주문 결제 & 지불</strong></p>
                    <p>당사는 신용카드와 페이팔 등의 대금 결제 방식을 포함한 대부분의 결제 방식을 지원하고 있습니다. 현재 사용가능한 결제수단으로는 비자(VISA), 마스터(MASTER), 마에스트로(MAESTRO), 아메리칸익스프레스(American Express), JCB 등이 있습니다. 당사는 또한 배송 국가에서 가능한 지역 대금 지급 수단도 채택하고 있습니다(예: Ideal, Sofort Bezahlung, Carte Bleue, Bank Transfer, Alipay, Visa Dankort, Finnish E-Banking). EU 회원국 내의 기업 이용자(Corporate customer within the EU)에게는 은행 계좌 이체 결제 방식을 제공합니다. 또한 유효한 VAT 번호가 있는 기업 이용자는 VAT를 직접 공제받을 수 있습니다. </p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>결제 승인 거절</strong></p>
                    <p>당사에서는 하기에 제시된 조건에 부합하지 않는 이용자의 구매계약에 대해서는 승인을 거절하며, 구매계약을 체결하지 않습니다. 본 웹사이트에서 구매신청과 구매계약 체결이 가능한 이용자의 조건은 다음과 같습니다.</p>
                    <ul>
                        <li>최소 만 18세 이상의 이용자</li>
                        <li>이름과 전화번호 이메일 주소와 결제 정보를 허위로 등록하지 않은 이용자</li>
                        <li>사서함이나 무인택배함이 아닌 배송 주소를 제공하는 이용자</li>
                        <li>당사 제휴 은행이 승인하는 유효한 신용카드와 직불카드, 혹은 Paypal과 같은 전자결제시스템을 사용하는 이용자</li>
                    </ul>
                    <p>다음과 같은 경우에 당사는 이용자의 구매신청을 승인하지 않습니다.</p>
                    <ul>
                        <li>당사의 결제 제휴 파트너사(예: Adyen 혹은 Paypal)가 이용자의 결제를 승인하지 않는 경우</li>
                        <li>당사가 통제 불가능한 사유로 배송을 진행할 수 없는 경우. 예를 들어 제품 공급사가 더 이상 제품을 생산하지 않는 경우</li>
                    </ul>
                </div>
                <div className="tap-inner__text">
                    <p><strong>배송방법과 재고 정보</strong></p>
                    <p>노르딕네스트 AB는 배송되는 물품의 종류와 배송 목적지에 따라 다양한 배송업체를 이용합니다. 주문 시, 당사는 이용자에게 가능한 배송 옵션 정보를 제공합니다. 구매하는 물품의 종류에 따라 소요되는 배송 시간이 다를 수 있습니다. 이용자는 선택한 물품에 대한 정보에서 예상 배송 소요 시간 확인이 가능합니다. 주문한 물품이 출고 되면 당사는 이용자에게 이메일로 발송 확인 사실을 통지합니다.</p>
                    <p>당사는 본 웹 사이트에 게시된 모든 물품의 영구적인 공급을 보증하지 않습니다. 이용자가 구매한 상품이 공급사의 생산 지연 및 품절에 따라 배송이 불가능해질 수 있습니다. </p>
                    <p>당사는 최대한 빠른 시일 내에 이용자가 구매한 물품 배송을 완료하는 것을 목표로 하고 있습니다. 그러나 불가항력적인 상황 발생으로 인해 물품 배송이 지연될 수 있습니다. (불가항력적인 일에는 다음의 경우가 포함됩니다. 천재지변, 전쟁, 기술 문제, 파업, 정부의 법률 혹은 규제 외 당사의 통제를 벗어난 모든 사유) 위와 같은 사유로 전체 물품 혹은 물품의 일부를 배송할 수 없는 경우 당사는 배송 지연에 대한 책임을 지지 않습니다. 물론 당사는 이용자의 주문 물품이 가능한 한 빠른 시일 내에 배송 완료될 수 있도록 최선을 다해 모든 조치를 취하고 있습니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>운송 관련 법적 책임</strong></p>
                    <p>노르딕네스트 AB는 배송 중 발생한 물품 파손 혹은 분실에 대한 책임이 있습니다.</p>
                    <p>당사는 물품 반품 시 배송 추적이 가능하며, 보험에 가입된 배송 서비스를 이용할 것을 권장합니다. 또한 당사로 물품을 반품할 경우 배송 당시의 포장, 혹은 충격 방지가 가능한 포장을 사용하셔야 합니다. 물품 파손 위험과 그에 따른 손실을 줄이기 위해 반송 시 위와 같은 사항을 숙지할 것을 권고합니다.</p>
                    <p>명백하게 파손된 물품이 배송될 경우, 이용자는 즉시로 배송 업체에 불만접수를 할 의무가 있으며 배송 물품 수신을 거부할 수 있습니다. 이와 같은 경우 노르딕네스트 AB가 배송 업체를 상대로 배상금을 청구할 수 있도록 당사의 고객 센터로 (<a href="!#">info@nordicnest.kr</a>) 연락 부탁 드립니다. </p>
                    <p>이용자는 인지하지 못한(hidden) 물품 손상이 발견되는 즉시 노르딕네스트 AB (<a href="!#">info@nordicnest.kr</a>)에게 통지해야 합니다. 당사의 고객 센터에서 불만사항 접수 진행에 대해 안내 드립니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>미배달 상황</strong></p>
                    <p>주문과 배송에 관련한 문제 발생 시, 당사의 고객센터, <a href="!#">info@nordicnest.kr</a> 로 문의바랍니다. 운송 중 파손, 물품 하자를 포함하여 주문서와 일치하지 않는 모든 사항에 대해 문의가 가능합니다. 소포가 훼손되었거나 내용물이 분실 혹은 파손된 경우, 이와 같은 사항이 발견되는 즉시 이용자는 배송 업체(예: DHL) 혹은 해당 지역 배송 서비스 업체에 불만사항을 접수해야 합니다. 이용자는 당사가 정상적으로 불만사항을 접수 및 처리하기 위해 반드시 파손 물품에 대한 사진 증거를 이메일로 보내야 한다는 점을 숙지해야 합니다. 고객센터가 불만사항을 접수 및 처리한 후 물품 반품 시, 이용자는 기존의 박스 포장을 사용해야 하며, 파손에 대한 설명을 동봉하고 불필요한 관세 부과를 피하기 위해 박스 겉면에 ‘반품’과 기존 운송장 번호를 명시해야 합니다. 하기 주소로 반송 바랍니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>불만 접수</strong></p>
                    <p>주문과 배송에 관련한 문제 발생 시, 당사의 고객센터, <a href="!#">info@nordicnest.kr</a> 로 문의바랍니다. 운송 중 파손, 물품 하자를 포함하여 주문서와 일치하지 않는 모든 사항에 대해 문의가 가능합니다. 소포가 훼손되었거나 내용물이 분실 혹은 파손된 경우, 이와 같은 사항이 발견되는 즉시 이용자는 배송 업체(예: DHL) 혹은 해당 지역 배송 서비스 업체에 불만사항을 접수해야 합니다. 이용자는 당사가 정상적으로 불만사항을 접수 및 처리하기 위해 반드시 파손 물품에 대한 사진 증거를 이메일로 보내야 한다는 점을 숙지해야 합니다. 고객센터가 불만사항을 접수 및 처리한 후 물품 반품 시, 이용자는 기존의 박스 포장을 사용해야 하며, 파손에 대한 설명을 동봉하고 불필요한 관세 부과를 피하기 위해 박스 겉면에 ‘반품’과 기존 운송장 번호를 명시해야 합니다. 하기 주소로 반송 바랍니다.</p>
                    <p>
                        <p>Nordic Nest AB (Reg. no. 556628-1597)</p>
                        <p>Stämpelvägen 3</p>
                        <p>SE-394 70 Kalmar</p>
                        <p>SWEDEN</p>
                    </p>
                    <p>노르딕네스트 AB의 공급사는 몇몇의 제품에 한하여 품질 보장 및 보증 서비스를 제공합니다. 품질 보장 및 보증 서비스가 적용되는 제품에 대한 더 자세한 정보는 당사의 고객 서비스 센터에 문의하시기 바랍니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>환불 정책 및 구매계약 철회의 권리</strong></p>
                    <p>이용자는 변심을 이유로 배송 받은 물품을 반품할 수 있습니다. 노르딕네스트 AB는 EU 전자상거래지침(E-Commerce Directive)을 준수합니다. 이에 따라 이용자는 365일 이내에 특별한 사유 없이 구매계약을 철회할 수 있습니다.</p>
                    <p>이용자의 구매계약 철회 권리는 운송 회사가 아닌 이용자 혹은 제3자가 주문한 모든 물품을 실제 수령한 시점 이후 365일이 지나면 소멸/실효됩니다.</p>
                    <p>청약 철회의 권리를 행사하기 위하여 이용자는 구매계약을 철회하겠다는 명확한 의사를 당사(Nordic Nest AB (Reg. no. 556628-1597)<br/>Stämpelvägen 3 SE-394 70 Kalmar, SWEDEN. info@nordicnest.kr)에게 통지할 의무가 있습니다. 이용자는 이를 우편이나 이메일로 통지할 수 있습니다.</p>
                    <p>이용자는 당사가 제공하는 취소 양식을 사용할 수 있으며, 이 양식을 사용하는 것이 의무는 아닙니다. 취소신청서는 여기에서 찾아보실 수 있습니다. 구매계약 철회가 가능한 최종 기한인 365일이란 언급한 기한 내에 이용자가 당사에게 구매계약을 철회 권리를 행사할 것이라는 의사를 표시해야 함을 의미합니다. 이용자가 반품할 권리를 행사하면 이용자는 반품 비용을 즉시 지불해야 합니다. 물품 반품 시 배송 중 파손 가능성을 피하기 위해 물품 포장이 안전하게 되었는지 반드시 확인바랍니다. 이용자는 당사로 구매계약 철회 의사를 표시한 날로부터 14일 이내에 물품을 반송해야 합니다. 이용자가 구매계약 철회 의사 표시 이후 14일이 지나기 전에 물품을 발송한 경우에만 구매계약 철회가 가능한 최종 기한을 충족시킨 것으로 간주합니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>구매계약 철회의 효과</strong></p>
                    <p>이용자가 구매계약을 철회하면 당사는 이용자가 지불한 물품 대금을 환급합니다. 이용자가 지불한 물품 대금은 배송비를 포함합니다. (이용자가 당사가 제공하는 기본 배송이 아닌 여타 배송을 선택 시에 발생하는 추가 요금은 환급에서 제외됩니다.) 전체 주문서에서 일부 물품만 반품한 경우 배송비는 환급되지 않습니다.</p>
                    <p>당사는 이용자가 당사의 고객 센터(<a href="!#">info@nordicnest.kr</a>)로 별도로 문의하는 경우를 제외하고, 이용자가 물품 대금 결제 시 사용하였던 지불 수단으로 대금을 환급합니다. 이러한 경우 당사는 대금 환급 시에 추가 수수료를 부과하지 않습니다. 당사는 이용자가 반품한 물품 수령 혹은 이용자가 물품을 반송했다는 확실한 증거를 수집할 때까지 대금 환급을 지연할 수 있습니다. 당사는 이용자에게 책임 있는 사유로 물품이 멸실 또는 훼손되거나 이용자의 사용 또는 일부 소비에 의하여 물품의 가치가 현저히 감소한 경우는 환급 대금에서 일부를 공제할 수 있습니다. </p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>당사에 의한 구매 철회</strong></p>
                    <p>당사는 다음과 같은 경우 구매계약을 철회할 수 있는 권리를 보유합니다.</p>
                    <p>
                        <p>- 당사가 보유한 재고 수량이 부족하거나 제품을 재주문할 수 없는 경우. 예컨대 공급사에서 제품을 단종시킨 경우</p>
                        <p>- 제품 배송에 있어서 당사가 충분한 정보를 제공받지 못한 경우</p>
                        <p>- 구매신청 진행 중 이용자가 허위로 정보를 기재한 경우</p>
                    </p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>소송 외/온라인 분쟁 해결</strong></p>
                    <p>유럽연합 집행 위원회(The European Commission)는 판매자와 소비자의 분쟁 중재에 관련한 소송 외 분쟁 해결/온라인 분쟁 해결 플랫폼(ADR/ODR 플랫폼)을 출범시켰습니다. 상기 언급한 플랫폼은 소송 없이 당사자끼리 분쟁 합의를 볼 수 있도록 비용을 절감하는 방식으로 쉽고 빠른 분쟁 해결을 돕습니다. ODR은 2016년 1월 9일 이후로 적용 가능한 플랫폼으로, <a href="http://ec.europa.eu/odr">http://ec.europa.eu/odr</a>에서 확인하실 수 있습니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>관련 법 조항</strong></p>
                    <p>본 계약 조항은 유럽연합(EU)이 회원국에게 권고하는 기준인 전자상거래지침(E-Commerce Directive)을 따르며, EU 전자상거래지침을 준수하도록 구성되었습니다. 당사는 상기에 제시한 이용약관을 사전 공지 없이 수정, 변경할 수 있습니다. 각 구매계약은 주문이 접수된 시점에서 가장 최근 업데이트된 이용약관이 적용됩니다</p>
                    <p>최근 업데이트: 2021년 06월 02일</p>
                </div>
            </div>
        </div>
    </div>
  )
}