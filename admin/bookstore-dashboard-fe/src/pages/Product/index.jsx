import { useState, useEffect, useContext } from "react";
import DataTable from "../../components/DataTable";
import Axios from "axios";
import { UserContext } from "../../context/UserContext";
function Product() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchBooks = async () => {
      console.log(user)
      const apiUrl = "http://localhost:8080/api/sach/getallsach";
      try {
        const response = await Axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        });
        setProducts(response.data || []);
      } catch (error) {
        console.error("Error fetching books:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.tieuDe.toLowerCase().includes(searchQuery.toLowerCase())
  );



  const productHeaders = [
    {
      label: "ID",
      className: "relative text-sm w-12 px-6 sm:w-16 sm:px-8",
      render: (product) => product.id,
    },
    {
      label: "Tên",
      className:
        "px-3 py-4 text-left text-sm tracking-wide text-slate-900 whitespace-nowrap",
      render: (product) => (
        <a href={`/san-pham/${product.id}`}>{product.tieuDe}</a>
      ),
    },
    {
      label: "Trạng thái",
      className:
        "px-3 py-4 text-center text-sm tracking-wide text-slate-900 whitespace-nowrap",
      render: (product) => (product.soLuong > 0 ? "Còn hàng" : "Hết hàng"),
    },
    {
      label: "Số lượng",
      className:
        "pl-3 pr-4 py-4 text-left text-sm tracking-wide text-slate-900 whitespace-nowrap sm:pr-6",
      render: (product) => `${product.soLuong}`,
    },
  ];
  return (
    <div className="m-8">
      <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <h1 className="text-2xl font-medium text-slate-900">Sản phẩm</h1>
        </div>
        <a href="/san-pham/them-sp">
          <div className="mt-4 flex sm:mt-0 sm:ml-4">
            <button className="px-4 py-2 bg-blue-400 text-white rounded-md block w-full order-0 sm:order-1 sm:ml-3">
              Thêm sản phẩm
            </button>
          </div>
        </a>

      </div>

      <div className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm ring-1 ring-slate-200 rounded-md sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="relative max-w-sm text-slate-400 ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </div>
              <input
                className="appearance-none w-full border border-slate-300 p-2 pl-10 rounded-md disabled:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tìm kiếm sản phẩm"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <DataTable data={filteredProducts} headers={productHeaders} />
        </div>
      </div>
    </div>
  );
}

export default Product;
