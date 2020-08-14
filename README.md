# gomdorymin

- 기본설정
1. 쇼핑몰 등록 관리 : basic_mall_list
2. 고객사 카테고리 설정 : basic_client_category
3. 쇼핑몰 카테고리 매핑 : basic_category_mapping
4. 입점사 정보 관리 : basic_store_information
5. 공급사 정보 관리 : basic_supplier_information
6. 쇼핑몰 SCM 로그인 : basic_scm_login

- 상품관리
1. 상품 조회/수정 : goods_goods_list
2. 신규 상품 등록 : goods_goods_register
3. 품목고시 일괄 등록 및 수정 : goods_bulletin_item
4. 추가 옵션 관리 : goods_add_option
5. 쇼핑몰별 판매가 조회/수정 : goods_saleprice_list
6. 쇼핑몰별 판매가 등록 : goods_saleprice_register
7. 쇼핑몰별 옵션 매치 : goods_option_match
8. 상품 엑셀 대량 등록 : goods_excel_massregister
9. 상품 기본 정보 수정 : goods_basic_information
10. 상품 판매 상태 수정 : goods_sale_state.html
11. 상품 정보 통합 수정 : goods_merge_information
12. 옵션 관리 코드 변경 : goods_option_manage
13. 상품 삭제/복원 관리 : goods_delete_restore
14. 상품 수정 이력 현황 : goods_modify_history
15. 공유 상품 조회/복사 : goods_share_copy
16. 공유 상품 품절 관리 : goods_share_soldout

- 상품연동관리
1. 쇼핑몰 그룹 정보 관리 : goods_interlock_group_list
2. 쇼핑몰 개별 상품 등록 : goods_interlock_each_register
3. 쇼핑몰 등록 실패 관리 : goods_interlock_register_fail
4. 쇼핑몰 상품 조회/수정 : goods_interlock_inquiry_modify
5. 쇼핑몰 상품 옵션 수정 : goods_interlock_option_modify
6. 쇼핑몰 재등록/연장 관리 : goods_interlock_reregister_extend
7. 쇼핑몰 코드 매칭 관리 : goods_interlock_code_match
8. 쇼핑몰 공지사항 : goods_interlock_notice_list

- 주문배송관리
1. 주문서 자동수집 관리 : 
2. 주문서 수동 등록 (화면) : 
3. 주문서 수동 등록 (엑셀) : 
4. 주문서 확인/처리 : 
5. 주문서 수정/복사 : 
6. 송장 등록 (화면) : 
7. 송장 등록 (엑셀) : 
8. 바코드 리딩 : 
9. 바코드 리딩 취소 : 
10. 송장 송신 관리 : 
11. 정산확정관리 : order_complete
12. 옵션 매칭 이력 관리 : order_stock
13. 옵션별 판매 현황 : order_option
14. 쇼핑몰별 배송 상태 조회 : order_delivery_mall
15. 매입처별 배송 상태 조회 : order_delivery_partner
16. 주문조회 : order_check

- 입점업체관리
1. 입점업체 관리 : business_list
2. 입점업체 게시글 관리 : business_list_board
3. 입점업체 수수료 관리 : business_list_comission
4. 상품 승인 관리 : business_product_apply
5. 추가 상품 승인 관리 : business_product_add
6. 통합 정산 관리 : business_adjust_total
7. 정산관리 : business_adjust_list
8. 수기 정산 요청 : business_adjust_manual
9. 주문 상품 정산 요청 : business_adjust_order
10. 배송비 정산 요청: business_adjust_delivery
11. 정산 후 주문 상품 환불 정산 : business_after_order
12. 정산 후 배송비 환불 정산 : business_after_delivery
13. 발행 내역 리스트 : business_tax_list
14. 수수료 계산서 발급 관리 : business_tax_commission

- 공급사관리
1. 공급사 관리 : scm_list
2. 공급사 게시글 관리 : scm_list_board
3. 공급사 수수료 관리 : scm_list_comission
4. 상품 승인 관리 : scm_product_apply
5. 추가 상품 승인 관리 : scm_product_add
7. 통합 정산 관리 : scm_adjust_total
8. 정산관리 : scm_adjust_list
9. 수기 정산 요청 : scm_adjust_manual
10. 주문 상품 정산 요청 : scm_adjust_order
11. 배송비 정산 요청: scm_adjust_delivery
12. 정산 후 주문 상품 환불 정산 : scm_after_order
13. 정산 후 배송비 환불 정산 : scm_after_delivery
14. 발행 내역 리스트 : scm_tax_list
15. 수수료 계산서 발급 관리 : scm_tax_commission

- C/S클레임관리
1. 문의수집 : claim_inquiry_collect
2. 문의내용처리 : claim_inquiry_proc
3. CS클레임수집 : claim_cs_collect
4. CS클레임처리 : claim_cs_handle
5. CS클레임관리처리 : claim_cs_proc

- 정산관리
1. 매입정산마스터관리 : calculation_master
2. 매입정산작업관리 : calculation_work
3. 매입정산내역관리 : calculation_list
4. 매입세금계산서관리 : calculation_tax

- 재고관리
1. 재고코드관리 : inventory_stock_code
2. 입고관리 : inventory_stockin_manage
3. 입고관리(일반) : inventory_stockin_basic
4. 출고관리(일반) : inventory_stockout_basic
5. 입고관리(회수) : inventory_stockin_back
6. 출고관리(주문) : inventory_stockout_order
7. 입고현황조회 : inventory_stockin_check
8. 출고현황조회 : inventory_stockout_check
9. 재고현황조회 : inventory_stock_check
10. 재고현황조회2 : inventory_stock_check2
11. 재고조사(실사) : inventory_stock_sb
12. 재고조사(대조) : inventory_stock_compare

- 통계관리
1. 일별매출현황 : statistics_daily
2. 월별매출현황 : statistics_monthly
3. 쇼핑몰별매출현황 : statistics_mall
4. 매입처별매출현황 : statistics_partner
5. 카테고리별매출현황 : statistics_category
6. 상품별매출현황 : statistics_product
7. 일별연동통계 : statistics_join_daily
8. 마케팅보드 : statistics_board
