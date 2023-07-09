namespace MyApp{
    class Program{
        // hàm phân hoạch, phân vùng
        // tiếng Anh là Partiton
        // hàm này trả về vị trí "j"
        public static int Partiton(int[] arr, int left, int right){
            // tạo biến chốt
            int chot = arr[left];

            int i = left;
            int j = right;

            while (true)
            {
                while (arr[i] < chot)
                {
                    i ++;
                }

                while (arr[j] > chot)
                {
                    j --;
                }

                if (i < j)
                {
                    int temp = 0;

                    // hoán đổi arr[i] và arr[j]
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;

                    i ++;
                    j --;
                }
                else if (i >= j)
                {
                    return j;
                }
            }
        }

        // hàm QuickSort
        public static void QuickSort(int[] arr, int left, int right){
            // điều kiện để dừng đệ quy
            if (left >= right)
            {
                return;
            }

            // tạo biến vị trí
            // dù đệ quy nhiều lần thì nó vẫn cần lấy ra cái vị trí
            int vi_tri = Partiton(arr, left, right);

            // gọi đệ quy để phân hoạch bên trái
            // sản phẩm là dãy số nhỏ hơn "biến chốt"
            QuickSort(arr, left, vi_tri);

            // gọi đệ quy để phân hoạch bên phải
            // sản phẩm là dãy số lớn hơn "biến chốt"
            QuickSort(arr, vi_tri + 1, right);
        }

        public static void Main(string[] args){
            // tạo mảng
            int[] arr = new int[1000];

            // nhập n
            Console.Write("Nhap n: ");
            int n = Convert.ToInt32(Console.ReadLine());
            
            // tạo đối tượng random
            Random dt_random = new Random();

            // tạo số ngẫu nhiên cho mảng
            for (int i = 0; i < n; i++)
            {
                // đây là ramdon từ 0 đến 1000
                arr[i] = dt_random.Next(0, 1001);
            }

            // in ra mảng ban đầu
            Console.Write("\nBan dau:\n");
            for (int i = 0; i < n; i++)
            {
                Console.Write(arr[i] + " ");
            }

            // gọi hàm QuickSort
            QuickSort(arr, 0, n -1);

            // in ra mảng sau khi sắp xếp (QuickSort)
            Console.Write("\n\nSau khi sap xep (QuickSort):\n");
            for (int i = 0; i < n; i++)
            {
                Console.Write(arr[i] + " ");
            }

            Console.Write("\n\n");
        }
    }
}