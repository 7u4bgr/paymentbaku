import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Payments from "./pages/payment";
import HistoryPages from "./pages/history";
import UserProfile from "./pages/userprofile";
import AddNew from "./pages/addnew";
import CommunalPayment from "./pages/communalpayment";
import MobilPayment from "./pages/mobilpayment";
import BankPayment from "./pages/bankpayment";
import SigortaPayment from "./pages/sigortapayment";
import TvPayment from "./pages/tvpayment";
import InternetPayment from "./pages/internetpayment";
import PhonePayment from "./pages/phonepayment";
import ShoppingPayment from "./pages/shoppingpayment";
import CheckPayment from "./pages/checkpayment";
import SuprisedPayment from "./pages/suprisedpayment";
import CommunalCheckPayment from "./pages/communalcheckpayment";
const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, "home", "/", Home),
  about: routeItem(2, "about", "/about", About),
  notFound: routeItem(3, "notFound", "*", NotFound),
  paymentspages: routeItem(4, "paymentspages", "/payments", Payments),
  historyspages: routeItem(5, "historypages", "/history", HistoryPages),
  userprofile: routeItem(6, "userprofile", "/user", UserProfile),
  addnew: routeItem(7, "addnew", "/add", AddNew),
  communalpayment: routeItem(
    8,
    "communalpayment",
    "/kommunal",
    CommunalPayment
  ),
  mobilpayment: routeItem(9, "mobilpayment", "/mobil", MobilPayment),
  bankpayment: routeItem(10, "bankpayment", "/bank", BankPayment),
  sigortapayment: routeItem(11, "sigortapayment", "/sigorta", SigortaPayment),
  tvpayment: routeItem(12, "tvpayment", "/tv", TvPayment),
  internetpayment: routeItem(
    13,
    "internetpayment",
    "/internet",
    InternetPayment
  ),
  phonepayment:routeItem(14,"phonepayment","/phone",PhonePayment),
  shoppingpayment:routeItem(15,"shoppingpayment","/shopping",ShoppingPayment),
  checkpayment:routeItem(16,"checkpayment","/check",CheckPayment),
  suprisedpayment:routeItem(17,"suprisedpayment","/suprised",SuprisedPayment),
  communalcheckpayment:routeItem(18,"communalcheckpayment","/communalcheckpayment",CommunalCheckPayment)
  
};

const routeArr = Object.values(routes);

export { routes, routeArr };
