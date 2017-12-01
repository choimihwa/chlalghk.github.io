$(document).ready(function() {
  //변수 지정
  var container = $('.menubar-container');
  var btn = $('.btn-menubar');
  var menubar = $('.btn-menubar, .menubar');
  var menu = $('.main-menu');
  var subMenu = $('.sub-menu');
  var li = $('.main-menu > li');
  var last = $('.main-menu > li:last-child');
  var subLast = $('.main-menu li:last-child li:last-child a');

  //클릭시 클래스/텍스트 추가(메인 메뉴)
  menubar.click(function() {
    container.toggleClass('menubar-act'); //toggleClass()안에 클래스를 추가
    menu.toggleClass('menu-act');
    if (container.hasClass('menubar-act')) { //hasClass()안에 클래스를 가지고 있는지 체크
      btn.text('메인 메뉴 닫기'); //text()안에 텍스트 추가
    } else {
      btn.text('메인 메뉴 열기');
    }
  });

  //1차 메뉴 클릭시 서브 메뉴 노출(마우스)
  li.click(function(e) {
    e.preventDefault(); //기본 이벤트 취소(a태그를 썼을때를 대비(현재 마크업은 상관없음))
    $(this).siblings().find('.sub-menu').removeClass('sub-menu-act'); //현재 메뉴의 형제를 찾아 클래스 삭제
    $(this).find('.sub-menu').addClass('sub-menu-act'); //현재 선택된 내용에 클래스 추가
  });

  //1차 메뉴 클릭시 서브 메뉴 노출(키보드)
  li.keyup(function(e) {
    e.preventDefault(); //기본 이벤트 취소(a태그를 썼을때를 대비(현재 마크업은 상관없음))
    if (e.keyCode == 13 || e.keyCode == 32) { //keyCode값이 13(enter) or 32(spacebar)일때
      $(this).siblings().find('.sub-menu').removeClass('sub-menu-act'); //현재 메뉴의 형제를 찾아 클래스 삭제
      $(this).find('.sub-menu').addClass('sub-menu-act'); //현재 선택된 내용에 클래스 추가
    }
  });

  //1차 메뉴 포커스 벗어나면 형제 메뉴의 서브 메뉴 감춤(키보드)
  li.focusin(function() {
    $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
  });

  //키보드 탭으로 이동시 마지막 메뉴의 포커스를 벗어나면 메뉴 닫기(1차 메뉴)
  last.focusout(function() {
    if (!(subMenu.hasClass('sub-menu-act'))) {
      container.removeClass('menubar-act'); //removeClass()안에 클래스 삭제//메뉴 아이콘 처음으로
      menu.removeClass('menu-act'); //메인 메뉴 닫기
    }
  });
  //키보드 탭으로 이동시 마지막 메뉴의 포커스를 벗어나면 메뉴 닫기(서브 메뉴)
  subLast.focusout(function() {
    container.removeClass('menubar-act'); //removeClass()안에 클래스 삭제//메뉴 아이콘 처음으로
    menu.removeClass('menu-act'); //메인 메뉴 닫기
  });
});