import  './lib/lib';
import $ from './lib/lib';

// $('.wrap').html(
//     `<div class="dropdown">

//             <button class="btn btn-primary dropdown-toggle" id='dropdownMenuButton'>
//                 Dropdown button
//             </button>

//             <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//                 <a href="#" class="dropdown-item">action 1</a>
//                 <a href="#" class="dropdown-item">action 2</a>
//                 <a href="#" class="dropdown-item">action 3</a>
//             </div>

//         </div> `
// );

//обязательно инициализировать дропдаун после вставки html
// $('.dropdown-toggle').dropdown();



$('#trigger').click(()=> $('#trigger').createModal({
    text: {
        title: 'modal title',
        body: 'modal body',
    },
    btns: {
        count: 2,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('данные сохранены');
                }
            ]
        ]
    }
}));