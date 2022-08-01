function toast({title='', message='', type= 'info', duration=3000}){
    const main = document.querySelector('#toast');
    if(main){
        //tạo thẻ div
        const toast = document.createElement('div');

        
        // xóa đi toast đã cũ
        const autoClear = setTimeout(function(){
            main.removeChild(toast);
        },duration + 1000)
        // 1000 ơ đây là thời gian biến mất của fadeOut

        // xóa bỏ toast khi click vào close
        toast.onclick = function(e){
            if (e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoClear);
            }
        }

        const icons ={
            success:'fa-solid fa-circle-check',
            error:'fa-solid fa-circle-exclamation'
        }

        

        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);

        toast.classList.add('toast',`toast--${type}`)
        toast.style.animation =`slideInLeft ease 0.3s,fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML=`
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        `;
        main.appendChild(toast);

        
    }
}



function showSuccessToast(){
    toast({
        title: 'Success',
        message: 'ĐƯỢC THỰC CHIẾN DỰ ÁN, không yêu cầu kinh nghiệm',
        type: 'success',
        duration: 3000
    })
}

function showErrorToast(){
    toast({
        title: 'Error',
        message: 'có lỗi xảy ra rồi, vui lòng liên hệ tôi',
        type: 'error',
        duration: 5000
    })
}
