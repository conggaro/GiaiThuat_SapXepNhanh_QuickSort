// Giải thuật sắp xếp nhanh QuickSort
// Phân hoạch của Hoare (tiếng Anh là Hoare Partition)

#include <iostream>
#define SIZE 1000
using namespace std;

// tạo hàm phân hoạch 
// (partition cũng được dịch là phân vùng)
int partition(int arr[SIZE], int left, int right){
    // tạo biến chốt (có chỗ thì người ta gọi là pivot)
    // chọn phần tử ngoài cùng ở bên trái làm chốt
    int chot = arr[left];

    int i = left;
    int j = right;

    while (true)
    {
        while (arr[i] < chot)
        {
            i++;
        }
        
        while (arr[j] > chot)
        {
            j--;
        }

        if (i < j)
        {
            int temp = 0;

            // hoán đổi 2 phần tử arr[i] và arr[j]
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
            j--;
        }
        else if (i >= j)
        {
            return j;
        }
    }
}

// hàm QuickSort
void QuickSort(int arr[SIZE], int left, int right){
    // điều kiện dừng
    // của giải thuật QuickSort
    if (left >= right)
    {
        return;
    }
    
    // p là cái gì
    // tôi đoán p là vị trí
    int p = partition(arr, left, right);

    // Gọi đệ quy QuickSort bên trái của p
    QuickSort(arr, left, p);

    // Gọi đệ quy QuickSort bên phải của p
    QuickSort(arr, p + 1, right);
}

int main(){
    // tạo mảng
    int arr[SIZE];

    // nhập n
    cout << "Nhap n: ";
    int n = 0;
    cin >> n;

    // random số
    srand(time(NULL));
    for (int i = 0; i < n; i++)
    {
        // có thể tạo số ngẫu nhiên từ 0 đến 1000
        arr[i] = rand() % 1000 + 1;
    }

    // in ra mảng ban đầu
    cout << "\nBan dau:\n";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    
    // gọi hàm QuickSort
    QuickSort(arr, 0, n - 1);

    // in ra mảng sau khi sắp xếp
    cout << "\n\nSau khi sap xep (QuickSort):\n";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }

    cout << "\n\n";

    return 0;
}