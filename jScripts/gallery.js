var curSlide = 0; //����� ������ ��� 0 ����� ��� ������� ������ ����� ���
var images = ["images/gallery/cake.jpg", "images/gallery/cupcakeBday.jpg", "images/gallery/donats.jpg", "images/gallery/icecream.jpg", "images/gallery/straubarrey.jpg", "images/gallery/macaroons.jpg"] //���� �� ��  �������
function preSlides() { //������� �� ������ �� ��� ����� ������� ���� .
    curSlide++; //����� ������ �1
    var choice = document.getElementsByClassName('demo'); //���� �� ������� ������ ������
    if (curSlide >= choice.length) { //����� ���� ���� ����� ����� ������ ����� ������
        curSlide = 0; //
    }

    changePics(curSlide); //����� �������� ������ �� ������ ������ ������ 
}

function nextSlides() { //������� �� ����� ���� ������ ���� ����� ������� ����
    curSlide--; //����� �� ������ �1
    if (curSlide < 0) { //����� ������ ��� ����
        var choice = document.getElementsByClassName('demo');//���� �� ������� ������ ������
        curSlide = choice.length - 1; //���� �� �� ������ ����� ������ �����
    }
    changePics(curSlide); //����� �������� ������ �� ������ ������ ������ 

}

function changePics(currentSlide) { // ����� ���� ������ ���� �� ����� ���� ������ ������ �� �������� �� ���� ����� 
    var caption = document.getElementById('caption'); // ����� ������ �����
    var choice = document.getElementsByClassName('demo'); //  ����� ����� ���� ������ ����� ������ ������
   
    document.getElementById("bigPicture").setAttribute("src", images[currentSlide]); // ����� �� ����� �� ������ ������ �����
    document.getElementById("bigPictureCounter").innerHTML = (currentSlide + 1) + " / " + images.length; //����� �� ������� �� ������� ����� ������ ������

    for (i = 0; i < choice.length; i++) { // ����� ������� �� �� ������� ������ ������ ���� �� ����
        choice[i].className = choice[i].className.replace(" active", ""); // ����� �� ������ ��� �������
    }
   
    choice[currentSlide].className += " active"; // ���� �� ������ ������ ������ ������
    caption.innerHTML = choice[currentSlide].alt; //���� ������ �� ������ ������ ���� �� ������ �� �� ������ ������
    curSlide = currentSlide; //������ ������ ����� �� ������ ������� �����
}