const commentsList = document.querySelector('#comments-list');
const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input');

commentForm.addEventListener('submit', formHandler)

$.ajax({
    url: 'php/index.php',
    type: 'GET',
    success: function(data){
        let comments = $.parseJSON(data);
        comments.forEach(comment => {
            const newComment = document.createElement('li');
            comment.forEach((element, index) => {
                if (index === 0) {
                    newComment.innerText += "";
                }
                else
                    newComment.innerText += element + " ";
            });
            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('role', 'button');
            deleteBtn.innerText = 'Удалить';
            deleteBtn.style['margin-left'] = '15px';
            newComment.append(deleteBtn);
            //Событие по клику
            deleteBtn.addEventListener('click', function(){
                this.closest('li').remove();

                $.ajax({
                        url: 'php/delete.php',
                        type: 'POST',
                        data: {'id': comment[0]},
                    })
            });

            commentsList.prepend(newComment);
        }
        );
    }
})

function formHandler(event){
    event.preventDefault();

    //Получаем текст комментария из поля ввода
    const commentText = commentInput.value;

    //Создаем тег li с помощью созадния элемента
    const newComment = document.createElement('li');
    newComment.innerText = commentText;

    //Создаем кнопку удалить
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Удалить';
    deleteBtn.style['margin-left'] = '15px';
    newComment.append(deleteBtn);

    //Событие по клику
    deleteBtn.addEventListener('click', function(){
        this.closest('li').remove();

        $.ajax({
            url: 'php/delete.php',
            type: 'POST',
            data: {'id': id},
        })

    });

    let id;

    //Добавляем элемент
    commentsList.prepend(newComment);

    $.ajax({
        url: 'php/update.php',
        type: 'POST',
        data: {'comment': commentInput.value},
        dataType: 'html',
        success: function(data){
            id = data;
        }
    })

    //Очищаем поле ввода
    commentInput.value = '';

    //Фокус на поле ввода
    commentInput.focus();
}
