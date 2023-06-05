import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import UploadGiftcard from "./components/giftcard/UploadGiftcard";
import AddGiftcard from "./components/giftcard/AddGiftcard";

import {
  AdminControl,
  AdsCampaign,
  CryptoRate,
  CryptoTranx,
  Dashboard,
  ExportData,
  Faq,
  FxRate,
  GhsWithdraw,
  GiftCard,
  Kyc1,
  Kyc3,
  Kyc4,
  News,
  NgnDeposit,
  NgnWithdraw,
  P2P,
  PushNotify,
  SendEmail,
  UsdDeposit,
  UsdWithdraw,
  Users,
  UserDetails,
  VirtualCard,
} from "./pages";
import Signup from "./auth/Signup";
import SignIn from "./auth/SignIn";
import SignInOtp from "./auth/SignInOtp";
import Forgot from "./auth/Forgot";
import Home from "./components/Home";
import Layout2 from "./components/Layout2";

function App() {
  return (
    <BrowserRouter>
      <div className="text-white bg-primary">
        <Routes>
          <Route
            path="/"
            element={
              <Layout2>
                <Home />
              </Layout2>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Layout2>
                <SignIn />
              </Layout2>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Layout2>
                <Signup />
              </Layout2>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Layout2>
                <Forgot />
              </Layout2>
            }
          />
          <Route
            path="/sign-in-otp/:resetToken"
            element={
              <Layout2>
                <SignInOtp />
              </Layout2>
            }
          />

          <Route
            path="/dashboard"
            element={
              <Sidebar>
                <Layout>
                  <Dashboard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/Admin-control"
            element={
              <Sidebar>
                <Layout>
                  <AdminControl />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/gift-card-tranx"
            element={
              <Sidebar>
                <Layout>
                  <GiftCard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/p2p-tranx"
            element={
              <Sidebar>
                <Layout>
                  <P2P />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/virtual-card"
            element={
              <Sidebar>
                <Layout>
                  <VirtualCard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/crypto-tranx"
            element={
              <Sidebar>
                <Layout>
                  <CryptoTranx />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/users"
            element={
              <Sidebar>
                <Layout>
                  <Users />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/usersdetails"
            element={
              <Sidebar>
                <Layout>
                  <UserDetails />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/news"
            element={
              <Sidebar>
                <Layout>
                  <News />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/faq"
            element={
              <Sidebar>
                <Layout>
                  <Faq />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/usd-withdraw"
            element={
              <Sidebar>
                <Layout>
                  <UsdWithdraw />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ngn-withdraw"
            element={
              <Sidebar>
                <Layout>
                  <NgnWithdraw />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ghs-withdraw"
            element={
              <Sidebar>
                <Layout>
                  <GhsWithdraw />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/fx-rate"
            element={
              <Sidebar>
                <Layout>
                  <FxRate />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/crypto-rate"
            element={
              <Sidebar>
                <Layout>
                  <CryptoRate />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/giftcard/upload"
            element={
              <Sidebar>
                <Layout>
                  <UploadGiftcard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/giftcard/add"
            element={
              <Sidebar>
                <Layout>
                  <AddGiftcard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ngn-deposit"
            element={
              <Sidebar>
                <Layout>
                  <NgnDeposit />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/usd-deposit"
            element={
              <Sidebar>
                <Layout>
                  <UsdDeposit />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ngn-transfer"
            element={
              <Sidebar>
                <Layout></Layout>
              </Sidebar>
            }
          />
          <Route
            path="/usd-transfer"
            element={
              <Sidebar>
                <Layout></Layout>
              </Sidebar>
            }
          />
          <Route
            path="/push-notice"
            element={
              <Sidebar>
                <Layout>
                  <PushNotify />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/export-data"
            element={
              <Sidebar>
                <Layout>
                  <ExportData />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ads-campaign"
            element={
              <Sidebar>
                <Layout>
                  <AdsCampaign />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/send-email"
            element={
              <Sidebar>
                <Layout>
                  <SendEmail />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/kyc-1&2"
            element={
              <Sidebar>
                <Layout>
                  <Kyc1 />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/kyc-3"
            element={
              <Sidebar>
                <Layout>
                  <Kyc3 />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/kyc-4"
            element={
              <Sidebar>
                <Layout>
                  <Kyc4 />
                </Layout>
              </Sidebar>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
