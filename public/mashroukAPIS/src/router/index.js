/* eslint-disable linebreak-style */
import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import IndexView from '../views/IndexView.vue';
import LogInView from '../views/LogInView.vue';
import MainView from '../views/MainView.vue';
import Converztions from '../views/TalkingViews/ConverztionsView.vue';
import Chat from '../views/TalkingViews/ChatView.vue';
import Form from '../views/FormViews/FormView.vue';
import MoreLinks from '../views/MoreLinksViews/MoreLinksView.vue';
import HellowWorld from '../components/HelloWorld.vue';
import ProfileShow from '../views/ProfileViews/ProfileView.vue';
import Requests from '../views/Requests/RequestsView.vue';
import FullRequest from '../views/Requests/FullRequestView.vue';
import Notification from '../views/NotificationView.vue';
import AcceptList from '../views/Requests/AcceptListView.vue';
import AcceptListOthers from '../views/Requests/Others/AcceptListOthersView.vue';
import PaymentList from '../views/Requests/PaymentListView.vue';
import PaymentListOthers from '../views/Requests/Others/PaymentListOthersView.vue';
import PaymentGetWays from '../views/Payments/PaymentGetWaysView.vue';
import offers from '../views/offers/offersView.vue';
import SettingMenu from '../views/settings/settingMenuView.vue';
import ForgetPassword from '../views/ProfileViews/ForgetPasswordView.vue';
import HelpSupportView from '../views/MoreLinksViews/HelpSupportView.vue';
import AddOffer from '../views/offers/AddOfferView.vue';
import FQA from '../views/MoreLinksViews/FQARealView.vue';
import AboutMashrouk from '../views/MoreLinksViews/AboutMashrouk.vue';
import Favorate from '../views/Requests/FavorateView.vue';
import CommercalRequests from '../views/Requests/CommercalRequestsView.vue';
import FullRequestsCommercal from '../views/Requests/FullCommercalRequestsView.vue';
import scriptView from '../chat/scriptView.vue';
import FormSuccess from '../views/SuccessViews/FormSuccessView.vue';
import FullRequestsOthers from '../views/Requests/Others/FullRequestsOthersView.vue';
import OfferSucces from '../views/SuccessViews/OfferSuccessView.vue';
import TermesCondition from '../views/TermesConditionView.vue';
import OfferDetails from '../views/offers/OfferDetailsView.vue';
import OfferDetailsOthers from '../views/offers/Others/OfferDetailsOthersView.vue';
import OfferDetailsAcceptedOthers from '../views/offers/Others/OfferDetailsAcceptedOthersView.vue';
import OfferDetailsAccepted from '../views/offers/OfferDetailsAcceptedView.vue';
import TestnodeView from '../views/TestnodeView.vue';
import testnodetwo from '../views/testnodetwoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HellowWorld,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: IndexView,
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
  },
  {
    path: '/Converztions',
    name: 'Converztions',
    component: Converztions,
  },
  {
    path: '/Chat/:id',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/Form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/MoreLinks',
    name: 'MoreLinks',
    component: MoreLinks,
  },
  {
    path: '/Profile',
    name: 'ProfileShow',
    component: ProfileShow,
  },

  {
    path: '/Requests',
    name: 'Requests',
    component: Requests,
  },
  {
    path: '/FullRequest/:id',
    name: 'FullRequest',
    component: FullRequest,
    props: true,
  },
  {
    path: '/Notification',
    name: '',
    component: Notification,
  },
  {
    path: '/AcceptList/:id',
    name: 'AcceptList',
    component: AcceptList,
  },
  {
    path: '/AcceptListOthers/:id',
    name: 'AcceptListOthers',
    component: AcceptListOthers,
  },
  {
    path: '/PaymentList/:id',
    name: 'PaymentList',
    component: PaymentList,
  },
  {
    path: '/PaymentListOthers/:id',
    name: 'PaymentListOthers',
    component: PaymentListOthers,
  },
  {
    path: '/PaymentGetWays',
    name: 'PaymentGetWays',
    component: PaymentGetWays,
  },
  {
    path: '/offers',
    name: 'offers',
    component: offers,
  },
  {
    path: '/SettingMenu',
    name: 'SettingMenu',
    component: SettingMenu,
  },
  {
    path: '/ForgetPassword',
    name: 'ForgetPassword',
    component: ForgetPassword,
  },
  {
    path: '/HelpSupportView',
    name: 'HelpSupportView',
    component: HelpSupportView,
  },
  {
    path: '/AddOffer/:id',
    name: 'AddOffer',
    component: AddOffer,
  },
  {
    path: '/FQA',
    name: 'FQA',
    component: FQA,
  },
  {
    path: '/AboutMashrouk',
    name: 'AboutMashrouk',
    component: AboutMashrouk,
  },
  {
    path: '/Favorate',
    name: 'Favorate',
    component: Favorate,
  },
  {
    path: '/CommercalRequests',
    name: 'CommercalRequests',
    component: CommercalRequests,
  },
  {
    path: '/FullRequestsCommercal/:id',
    name: 'FullRequestsCommercal',
    component: FullRequestsCommercal,
  },
  {
    path: '/scriptView',
    name: 'scriptView',
    component: scriptView,
  },
  {
    path: '/FormSuccess',
    name: 'FormSuccess',
    component: FormSuccess,
  },
  {
    path: '/FullRequestsOthers/:id',
    name: 'FullRequestsOthers',
    component: FullRequestsOthers,
  },
  {
    path: '/OfferSucces',
    name: 'OfferSucces',
    component: OfferSucces,
  },
  {
    path: '/TermesCondition',
    name: 'TermesCondition',
    component: TermesCondition,
  },
  {
    path: '/OfferDetails:id',
    name: 'OfferDetails',
    component: OfferDetails,
  },
  {
    path: '/OfferDetailsOthers:id',
    name: 'OfferDetailsOthers',
    component: OfferDetailsOthers,
  },
  {
    path: '/OfferDetailsAccepted:id',
    name: 'OfferDetailsAccepted',
    component: OfferDetailsAccepted,
  },
  {
    path: '/OfferDetailsAcceptedOthers:id',
    name: 'OfferDetailsAcceptedOthers',
    component: OfferDetailsAcceptedOthers,
  },
  // {
  //   path: '/',
  //   name: '',
  //   component:,
  // },
  {
    path: '/testnodetwo',
    name: 'testnodetwo',
    component: testnodetwo,
  },
  {
    path: '/TestnodeView',
    name: 'TestnodeView',
    component: TestnodeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
