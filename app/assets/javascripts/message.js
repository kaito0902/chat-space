$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message">
          <div class="Message__upper-info">
            <div class="Message-talker">
              ${message.user_name}
            </div>
            <div class="Message-date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__text">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Message">
        <div class="Message__upper-info">
          <div class="Message-talker">
            ${message.user_name}
          </div>
          <div class="Message-date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message">
          <p class="Message__text">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Main-chat__chatspace').append(html);
      $('.Main-chat__chatspace').animate({ scrollTop: $('.Main-chat__chatspace')[0].scrollHeight});
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function() {
      $('.submit-btn').prop('disabled', false);
    });
  });
});
