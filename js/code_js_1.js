// lấy phần tử input
var dt_input = document.querySelector("input");

// lấy phần tử button
var dt_button = document.querySelector("button");

// lấy phần tử có class arr_1
var dt_arr1 = document.querySelector(".arr_1");

// lấy phần tử có class arr_2
var dt_arr2 = document.querySelector(".arr_2");

// hàm phân hoạch, phân vùng
// tiếng Anh là Partition
// trả về vị trí của j (Tức là nó return j)
function Partition(arr, left, right){
    // tạo biến chốt
    var chot = arr[left];

    var i = left;
    var j = right;

    while (true) {
        while (arr[i] < chot) {
            i ++;
        }
    
        while (arr[j] > chot) {
            j --;
        }

        if (i < j) {
            var temp = 0;

            // hoàn đổi arr[i] và arr[j]
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i ++;
            j --;
        }
        else if (i >= j) {
            return j;
        }
    }
}

// hàm QuickSort
function QuickSort(arr, left, right){
    // tạo điều kiện để dừng đệ quy
    if (left >= right) {
        return;
    }

    // tạo biến vị trí
    // có lúc thì nó là vị trí của chốt
    // có lúc thì nó là vị trí của chốt - 1
    var vi_tri = Partition(arr, left, right);

    // gọi hàm QuickSort
    // để đệ quy phân vùng bên trái
    QuickSort(arr, left, vi_tri);

    // gọi hàm QuickSort
    // để đệ quy phân vùng bên phải
    QuickSort(arr, vi_tri + 1, right);
}

// |CHƯƠNG TRÌNH CHÍNH|

// tạo biến data để hứng dữ liệu từ input
var data = 0;

// lắng nghe sự kiện nhập dữ liệu
dt_input.addEventListener("input", function(){
    data = parseInt(dt_input.value);

    console.log(data);
});

// lắng nghe sự kiện click chuột vào button
dt_button.addEventListener("mousedown", function(){
    // tạo biến khởi tạo
    // để chuẩn bị render dữ liệu ra màn hình
    var khoi_tao = "";

    // tạo mảng
    var arr = [];

    for(var i = 0; i < data; i++){
        // tạo số ngẫu nhiên
        // từ 0 đến 100
        var item = Math.floor(Math.random() * 101);

        arr.push(item);
    }

    for(var i = 0; i < data; i++){
        khoi_tao = khoi_tao + `<div class="child">${arr[i]}</div>`;
    }

    dt_arr1.innerHTML = khoi_tao;

    // gọi hàm QuickSort
    QuickSort(arr, 0, data - 1);

    // xóa dữ liệu cũ của khoi_tao
    khoi_tao = "";

    for(var i = 0; i < data; i++){
        khoi_tao = khoi_tao + `<div class="child">${arr[i]}</div>`;
    }

    dt_arr2.innerHTML = khoi_tao;
});