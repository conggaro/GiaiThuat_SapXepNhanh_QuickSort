import java.util.Random;
import java.util.Scanner;

class Program{
    // hàm phân hoạch, phân vùng
    // tiếng Anh là Partition
    // nó trả về vị trí của "j"
    public static int Partition(int[] arr, int left, int right){
        // tạo biến chốt
        int chot = arr[left];

        int i = left;
        int j = right;

        while (true) {
            while (arr[i] < chot) {
                i ++;
            }

            while (arr[j] > chot) {
                j --;
            }

            if (i < j) {
                int temp = 0;

                // hoán đổi arr[i] và arr[j]
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

    public static void QuickSort(int[] arr, int left, int right){
        // thêm điều kiện dừng của đệ quy
        if (left >= right) {
            return;
        }
        
        // tạo biến vị trí
        int vi_tri = Partition(arr, left, right);

        // gọi đệ quy để phân hoạch bên trái
        // bên trái của cái vi_tri ấy
        QuickSort(arr, left, vi_tri);

        // gọi đệ quy để phân hoạch bên phải
        // bên phải của cái vi_tri ấy
        QuickSort(arr, vi_tri + 1, right);
    }

    public static void main(String[] args){
        // tạo mảng
        int[] arr = new int[1000];

        // tạo đối tượng nhập dữ liệu
        Scanner dt_NhapDuLieu = new Scanner(System.in);

        // nhập n
        System.out.print("Nhap n: ");
        int n = dt_NhapDuLieu.nextInt();

        // tạo đối tượng random
        Random dt_random = new Random();

        // tạo số ngẫu nhiên cho mảng
        for(int i = 0; i < n; i++){
            arr[i] = dt_random.nextInt(100) + 1;
        }

        // in ra mảng ban đầu
        System.out.print("\nBan dau:\n");
        for(int i = 0; i < n; i++){
            System.out.print(arr[i] + " ");
        }

        System.out.print("\n\nSau khi sap xep (QuickSort):\n");

        // gọi hàm QuickSort
        QuickSort(arr, 0, n - 1);

        // in ra mảng sau khi sắp xếp bằng QuickSort
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }

        System.out.print("\n\n");
    }
}