/**
 * @author minks
 */

$(function() {
    setAsideListHeight();
	
	//리사이즈
	$(window).resize(function() {
		setAsideListHeight();
	});
    
    //관리자 헤더 상단의 팝업 보이기/숨기기
    $('header.header .top_menu_drop .top_menu_drop_tit').on("click", function(evt) {
        evt.preventDefault();
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(this).next('.top_menu_drop_area').stop(true,true).slideUp(200);
        } else {
            $('header.header .top_menu_drop .top_menu_drop_tit').removeClass("on");
            $('header.header .top_menu_drop .top_menu_drop_area').css("display","none");
            $(this).addClass("on");
            $(this).next('.top_menu_drop_area').stop(true,true).slideDown(200);
        }
    });
    
    $('.mb_area .mb_box .top_menu>li').on("click", function(evt) {
        evt.preventDefault();
        var dropData = $(this).attr("drop-data");
        
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $('.mb_area .mb_box .top_menu_drop_list[drop-data="' + dropData + '"]').stop(true,true).hide();
        } else {
            $('.mb_area .mb_box .top_menu>li').removeClass("on");
            $('.mb_area .mb_box .top_menu_drop_list').css("display","none");
            $(this).addClass("on");
            $('.mb_area .mb_box .top_menu_drop_list[drop-data="' + dropData + '"]').stop(true,true).show();
        }
    });
	
	//상위 메뉴 밑의 하위 메뉴 보이기/숨기기
	$('nav.nav .nav_list>li').on("mouseover", function(evt) {
		evt.preventDefault();
        $('nav.nav .nav_list>li .nav_sub_list').css("display","none");
        $(this).children('.nav_sub_list').css("display","block");
        $(this).children('.nav_sub_list').stop(true,true).slideDown(200);
	});
	
	$('nav.nav .nav_list>li').on("mouseleave", function(evt) {
		evt.preventDefault();
        $(this).children('.nav_sub_list').stop(true,true).slideUp(200);
	});
    
    //상위 메뉴 밑의 하위 메뉴 보이기/숨기기
	$('aside.aside .aside_list>li .aside_list_tit').each(function() {
		if ($(this).hasClass("on")) {
            $(this).next('.aside_sub_list').css("display","block");
        } else {
            $(this).next('.aside_sub_list').css("display","none");
        }
	});
	
    $('aside.aside .aside_list>li .aside_list_tit').on("click", function(evt) {
        evt.preventDefault();
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(this).next('.aside_sub_list').stop(true,true).slideUp(200);
        } else {
            $(this).addClass("on");
            $(this).next('.aside_sub_list').stop(true,true).slideDown(200);
        }
    });
    
    $('.mb_area .mb_box .aside_list>li .aside_list_tit').on("click", function(evt) {
        evt.preventDefault();
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(this).next('.aside_sub_list').stop(true,true).slideUp(200, function() {
                setAsideListHeight();
            });
        } else {
            $(this).addClass("on");
            $(this).next('.aside_sub_list').stop(true,true).slideDown(200, function() {
                setAsideListHeight();
            });
        }
    });
    
    //모바일 슬라이드 메뉴 보이기/숨기기
	$('.mb_area .mb_btn').click(function() {
		if ($('.mb_area .mb_menu').css("display") == "none") {
			$('.mb_area .mb_menu').css('display','block');
			$('.mb_area .mb_menu').css('z-index','999');
			$('.mb_area .mb_box').css('right','0px');
			$('.mb_area .line1').addClass('line11');
			$('.mb_area .line2').addClass('line22');
			$('.mb_area .line3').addClass('line33');
			//$('body').css('overflow','hidden');
		} else {
			$('.mb_area .mb_menu').css('display','none');
			$('.mb_area .mb_menu').css('z-index','-1');
			$('.mb_area .mb_box').css('right','-300px');
			$('.mb_area .line1').removeClass('line11');
			$('.mb_area .line2').removeClass('line22');
			$('.mb_area .line3').removeClass('line33');
			//$('body').css('overflow','scroll');
		}
	});
    
    //모바일 최상위 메뉴에 따라 하위 메뉴 내용 변경
    $(".mb_area .mb_box .nav_list>li").bind("click", function() {
        var navData = $(this).attr("nav-data");
        
        $(".mb_area .mb_box .nav_list>li").removeClass("on");
        $(".mb_area .mb_box .aside_list").css("display","none");
        $(this).addClass("on");
        $(".mb_area .mb_box .aside_list[aside-data='" + navData + "']").stop(true,true).show();
        
        setAsideListHeight();
    });
    
    if ($(".mb_area .mb_box .nav_list>li.on").length > 0) {
        var liIndex = $(".mb_area .mb_box .nav_list>li.on").index();
        $(".mb_area .mb_box .nav_list>li").eq(liIndex).trigger("click");
    } else {
        $(".mb_area .mb_box .nav_list>li").eq(0).trigger("click");
    }
    
    $(".mb_area .mb_box .top_menu_area .top_menu>li").on("click", function() {
        setAsideListHeight();
    });
	
	//탭 클릭시 내용 변경
    $(".content_tab_area .content_tab>li").bind("click", function() {
        var tabData = $(this).attr("tab-data");
        
		$(this).siblings().removeClass("active");
		$(this).closest(".content_tab_area").children(".content_tab_con").css("display","none");
        $(this).addClass("active");
		$(this).closest(".content_tab_area").children(".content_tab_con[tab-data='" + tabData + "']").stop(true,true).show();
    });
    
	$($(".content_tab_area")).each(function() {
		if ($(this).children(".content_tab").children("li.active").length > 0) {
			var liIndex2 = $(this).children(".content_tab").children("li.active").index();
			$(this).children(".content_tab").children("li").eq(liIndex2).trigger("click");
		} else {
			$(this).children(".content_tab").children("li").eq(0).trigger("click");
		}
	});
	
	//파일 업로드시 파일명 추출
    $(".content_main .content_file_area input[type='file']").on("change", function() {
        var filename = "";
        
        if (window.FileReader) {
            //기본 브라우저
            filename = $(this)[0].files[0].name;
        } else {
            //old IE
            filename = $(this).val().split('/').pop().split('\\').pop();
        }
        
        $(this).siblings(".content_file_name").val(filename);
    });
	
	//입력한 글자수 출력
    $(".content_main .content_text_limit").each(function() {
        setTextLength(this);
    });

    $(".content_main .content_text_limit").on("keyup", function() {
        setTextLength(this);
    });
	
	//헤더 고정 리스트 테이블의 헤더 가로 스크롤 하기
	$(".content_main .fixed_header_table_area .content_list_table_area").scroll(function() {
		$(".content_main .fixed_header_table_area .content_list_table .thead tr").css("left",0 - $(this).scrollLeft());
	});
           
});

//모바일 하위 메뉴 높이 설정
function setAsideListHeight() {
    $(".mb_area .mb_box .aside_list_area").css("height","auto");
    
    var mbHeight = $(".mb_area .mb_box").outerHeight();
    var topMenuHeight = $(".mb_area .mb_box .top_menu_area").outerHeight();
    var navListHeight= $(".mb_area .mb_box .nav_list").outerHeight();
    var asideListHeight = $(".mb_area .mb_box .aside_list_area").outerHeight();
    
    if ((mbHeight - topMenuHeight) > navListHeight) {
        if ((mbHeight - topMenuHeight) > asideListHeight) {
            $(".mb_area .mb_box .aside_list_area").css("height",(mbHeight - topMenuHeight) + "px");
        }
    } else {
        if (navListHeight > asideListHeight) {
            $(".mb_area .mb_box .aside_list_area").css("height",navListHeight + "px");
        }
    }
}

//입력한 글자수 출력
function setTextLength(obj) {
	var inputText = $(obj).val();
	var limit = Number($(obj).next(".content_text_size").children(".limit_size").text());
	
	if (limit > 0) {
		if (inputText.length > limit) {
			$(obj).val(inputText.substr(0, limit));
			inputText = $(obj).val();
			return;
		}
	}
	
	$(obj).next(".content_text_size").children(".input_size").text(getTextLength(inputText));
}

//입력한 글자수 가져오기
function getTextLength(str) {
    var len = 0;
    
    for (var i=0; i<str.length; i++) {
        len++;
    }
    
    return len;
}

//레이어 팝업 열기
function openLayer(layer_id) {
    
}

