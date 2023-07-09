# hàm phân hoạch, phân vùng
# tiếng Anh là Partition
def Partition(danh_sach, left, right):
    # tạo biến chốt
    chot = danh_sach[left]

    i = left
    j = right

    while True:
        while danh_sach[i] < chot:
            i += 1

        while danh_sach[j] > chot:
            j -= 1

        if i < j:
            # hoán đổi danh_sach[i] và danh_sach[j]
            danh_sach[i], danh_sach[j] = danh_sach[j], danh_sach[i]

            i += 1
            j -= 1

        elif i >= j:
            return j
        
# hàm QuickSort
def QuickSort(danh_sach, left, right):
    # điều kiện để dừng đệ quy
    if left >= right:
        return
    
    # tạo biến vị trí của chốt
    vi_tri = Partition(danh_sach, left, right)

    # đệ quy phân hoạch bên trái
    # để thu được dãy số nhỏ hơn chốt
    QuickSort(danh_sach, left, vi_tri)

    # đệ quy phân hoạch bên phải
    # để thu được dãy số lớn hơn chốt
    QuickSort(danh_sach, vi_tri + 1, right)

# |CHƯƠNG TRÌNH CHÍNH|

import random

# tạo danh sách
danh_sach = []

# nhập n
n = int(input(f"Nhap n: "))

# tạo giá trị ngẫu nhiên cho danh sách
for i in range(0, n, 1):
    # tạo giá trị ngẫu nhiên từ 0 đến 100
    gia_tri_NgauNhien = random.randint(0, 100)
    danh_sach.append(gia_tri_NgauNhien)

# in danh sách ban đầu ra màn hình
print("\nBan dau:")
print(danh_sach)

# gọi hàm QuickSort
QuickSort(danh_sach, 0, n - 1)

# in ra danh sách sau khi sắp xếp (QuickSort)
print(f"\nSau khi sap xep (QuickSort):")
print(danh_sach, end="\n\n")