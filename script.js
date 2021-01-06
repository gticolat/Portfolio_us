$(document).ready(function () {

  $(window).width(function () {
    if ($(window).width() > 450) {
      $('.blog_article').hover(function () {
        $('.blog_article_img img', this).toggleClass("blog_article_img_img_hover");
        $('.blog_article_img', this).toggleClass("blog_article_img_hover");
        $('.blog_article_content', this).toggleClass("blog_article_content_hover");
        $('.blog_article_content_text', this).toggleClass("blog_article_content_text_hover");
      });
    } else {
      $('#bouton-plus1').click(function () {
        $('#blog_article_img1 img').toggleClass("blog_article_img_img_hover");
        $('#blog_article_img1').toggleClass("blog_article_img_hover");
        $('#blog_article_content1').toggleClass("blog_article_content_hover");
        $('#blog_article_content_text1').toggleClass("blog_article_content_text_hover");
        $('#bouton-plus1').toggleClass("bouton-plus-clic");
      });

      $('#bouton-plus2').click(function () {
        $('#blog_article_img2 img').toggleClass("blog_article_img_img_hover");
        $('#blog_article_img2').toggleClass("blog_article_img_hover");
        $('#blog_article_content2').toggleClass("blog_article_content_hover");
        $('#blog_article_content_text2').toggleClass("blog_article_content_text_hover");
        $('#bouton-plus2').toggleClass("bouton-plus-clic");
      });

      $('#bouton-plus3').click(function () {
        $('#blog_article_img3 img').toggleClass("blog_article_img_img_hover");
        $('#blog_article_img3').toggleClass("blog_article_img_hover");
        $('#blog_article_content3').toggleClass("blog_article_content_hover");
        $('#blog_article_content_text3').toggleClass("blog_article_content_text_hover");
        $('#bouton-plus3').toggleClass("bouton-plus-clic");
      });
    }
  });



  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('header').addClass("sticky");
    } else {
      $('header').removeClass("sticky");
    }
  });

  $('.bouton-burger').click(function () {
    $('.menu').toggleClass('menu-open');
  });


  $(window).on('beforeunload', function () {
    $(window).scrollTop(0);
  });






  $('.rond-competences-item').hover(function () {
    $(this).addClass("notblur");
    $(".rond-competences-item").not(".notblur").addClass("blur");
  }, function () {
    $('.rond-competences-item').removeClass("blur");
    $(this).removeClass("notblur");
  });


  $('.rond-html').click(function () {
    $('#carte-competence-html').attr('id', 'carte-competence-html-afficher');
    $('#carte-competence-css-afficher').attr('id', 'carte-competence-css');
    $('#carte-competence-js-afficher').attr('id', 'carte-competence-js');
    $('#carte-competence-php-afficher').attr('id', 'carte-competence-php');
    $('#carte-competence-sql-afficher').attr('id', 'carte-competence-sql');
  });

  $('.rond-css').click(function () {
    $('#carte-competence-css').attr('id', 'carte-competence-css-afficher');
    $('#carte-competence-html-afficher').attr('id', 'carte-competence-html');
    $('#carte-competence-js-afficher').attr('id', 'carte-competence-js');
    $('#carte-competence-php-afficher').attr('id', 'carte-competence-php');
    $('#carte-competence-sql-afficher').attr('id', 'carte-competence-sql');
  });

  $('.rond-js').click(function () {
    $('#carte-competence-js').attr('id', 'carte-competence-js-afficher');
    $('#carte-competence-html-afficher').attr('id', 'carte-competence-html');
    $('#carte-competence-css-afficher').attr('id', 'carte-competence-css');
    $('#carte-competence-php-afficher').attr('id', 'carte-competence-php');
    $('#carte-competence-sql-afficher').attr('id', 'carte-competence-sql');
  });

  $('.rond-php').click(function () {
    $('#carte-competence-php').attr('id', 'carte-competence-php-afficher');
    $('#carte-competence-html-afficher').attr('id', 'carte-competence-html');
    $('#carte-competence-css-afficher').attr('id', 'carte-competence-css');
    $('#carte-competence-js-afficher').attr('id', 'carte-competence-js');
    $('#carte-competence-sql-afficher').attr('id', 'carte-competence-sql');
  });

  $('.rond-sql').click(function () {
    $('#carte-competence-sql').attr('id', 'carte-competence-sql-afficher');
    $('#carte-competence-html-afficher').attr('id', 'carte-competence-html');
    $('#carte-competence-css-afficher').attr('id', 'carte-competence-css');
    $('#carte-competence-js-afficher').attr('id', 'carte-competence-js');
    $('#carte-competence-php-afficher').attr('id', 'carte-competence-php');
  });




});