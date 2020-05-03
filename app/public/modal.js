var modal = document.getElementById('surveyModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);

function openModal(){
    modal.style.display = 'block';
} 

function closeModal(){
    modal.style.display = 'none';
} 

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none'; 
    }
}

$('#modalBtn').on('click', function(e){
    event.preventDefault();
    
    var surveyValidation = true;
    
    if($('#fname').val() === '' || $('photo').val()=== ''){
        surveyValidation = false;
    } 
    if(surveyValidation === true){
        var user = {
            name: $('#fname').val().trim(),
            photo: $('#photo').val().trim(),
            scores: [
                $('#match0').val(),
                $('#match1').val(),
                $('#match2').val(),
                $('#match3').val(),
                $('#match4').val(),
                $('#match5').val(),
                $('#match6').val(),
                $('#match7').val(),
                $('#match8').val(),
                $('#match9').val(),
            ]
        };
        console.log(user);
        
        var currentURL = window.location.origin;
        
        $.post(currentURL + '/api/friends', user, function(data){
            $('#newFriend').text(data.name);
            $('#newFriendPhoto').attr('src',data.photo);
            $('#surveyModal').modal('toggle');

        });
    } else {
        alert('Complete is Incomplete! Don\'t you want a new friend?')
    }
});