import React, { Component } from "react";

import TronWeb from 'tronweb';
import Utils from 'utils';
import Home from './Home.js';
import Top from "./TopPage";
import { Route, BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingPage from "./LoadingPage";
import TopPage from "./TopPage";
import axios from 'axios';

const FOUNDATION_ADDRESS = 'THPpnYs4NfquDKZq5F3JaLQwm3BZYegGrN';
const OWNER = 'TV2DRiydzogJYQZwFcaUuLRh9LntAk2HoxB';

let refLinkAddress;
const Child = ({ match }) => (refLinkAddress = match.params.id);

class App extends React.Component {
  async componentDidMount() {



    await new Promise(resolve => {
      const tronWebState = {
        installed: window.tronWeb,
        loggedIn: window.tronWeb && window.tronWeb.ready
      };

      if (tronWebState.installed) {
        this.setState({
          tronWeb:
            tronWebState
        });

        return resolve();
      }

      let tries = 0;

      const timer = setInterval(() => {
        if (tries >= 10) {
          const TRONGRID_API = 'https://api.trongrid.io';

          window.tronWeb = new TronWeb(
            TRONGRID_API,
            TRONGRID_API,
            TRONGRID_API
          );

          this.setState({
            tronWeb: {
              installed: false,
              loggedIn: false
            }
          });

          clearInterval(timer);
          return resolve();
        }

        tronWebState.installed = !!window.tronWeb;
        tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

        if (!tronWebState.installed)
          return tries++;

        this.setState({
          tronWeb: tronWebState
        });

        resolve();
      }, 100);
    });

    if (!this.state.tronWeb.loggedIn) {
      // Set default address (foundation address) used for contract calls
      // Directly overwrites the address object as TronLink disabled the
      // function call
      window.tronWeb.defaultAddress = {
        hex: window.tronWeb.address.toHex(FOUNDATION_ADDRESS),
        base58: FOUNDATION_ADDRESS
      };

      window.tronWeb.on('addressChanged', () => {
        if (this.state.tronWeb.loggedIn)
          return;

        this.setState({
          tronWeb: {
            installed: true,
            loggedIn: true
          }
        });
      });
    }

    await Utils.setTronWeb(window.tronWeb);

    // this.startEventListener();
    //   this.fetchMessages();
    await this.loadBlockChainData();
  }

  loadBlockChainData = async () => {


    const sunny = 1000000;

    const balTemp = await Utils.tronWeb.trx.getBalance(accTemp);
    const ballTemp = balTemp / sunny;
    this.setState({ balance: ballTemp });

    const accTemp = await Utils.tronWeb.defaultAddress.base58;
    this.setState({ account: accTemp });

    const contractBalance = await Utils.tronWeb.trx.getBalance(FOUNDATION_ADDRESS);
    this.setState({ contractBalance: contractBalance / sunny });

    const totalMembers = await Utils.contract.totalMembers().call();
    this.setState({ totalMembers: parseInt(totalMembers.toString()) });

    const sitetotalInvestments = await Utils.contract.totalInvestments().call();
    this.setState({ sitetotalInvestments: parseInt(sitetotalInvestments.toString()) / sunny });

    const depositid = await Utils.contract.depositid().call();
    this.setState({ depositid: parseInt(depositid.toString()) });

    const ultraCount = await Utils.contract.ultraCount().call();
    this.setState({ ultraCount: parseInt(ultraCount.toString()) });

    const minDepositSize = await Utils.contract.minDepositSize().call();
    this.setState({ minDepositSize: parseInt(minDepositSize.toString()) / sunny });

    const maxDepositSize = await Utils.contract.maxDepositSize().call();
    this.setState({ maxDepositSize: parseInt(maxDepositSize.toString()) / sunny });

    const totalid = await Utils.contract.id().call();
    this.setState({ totalid: parseInt(totalid.toString()) });

    let currentuser = await Utils.contract.members(this.state.account).call();

    let totalInvested = currentuser.totalInvested;
    this.setState({ totalInvested: parseInt(totalInvested.toString()) / sunny });

    let isUltra = currentuser.isUltra;
    this.setState({ isUltra: parseInt(isUltra.toString()) });

    let userid = currentuser.id;
    this.setState({ userid: parseInt(userid.toString()) });

    let maxRec = currentuser.maxRec;
    this.setState({ maxRec: parseInt(maxRec.toString()) / sunny });

    let totalPaid = currentuser.totalPaid;
    this.setState({ totalPaid: parseInt(totalPaid.toString()) / sunny });

    let avlBalance = currentuser.avlBalance;
    this.setState({ avlBalance: parseInt(avlBalance.toString()) / sunny });

    let time = currentuser.time;
    this.setState({ time: parseInt(time.toString()) });

    let presenttime = await Utils.contract.getNow().call();
    this.setState({ presenttime: parseInt(presenttime.toString()) });

    let totalRewards = currentuser.totalRewards;
    this.setState({ totalRewards: parseInt(totalRewards.toString()) / sunny });


    let totalBiz = currentuser.totalBiz;
    this.setState({ totalBiz: parseInt(totalBiz.toString()) / sunny });

    let level1Count = currentuser.level1Count;
    this.setState({ level1Count: parseInt(level1Count.toString()) });

    let depositCount = currentuser.depositCount;
    this.setState({ depositCount: parseInt(depositCount.toString()) });

    let isActive = currentuser.isActive;
    this.setState({ isActive: parseInt(isActive.toString()) });

    let lastDeposit = currentuser.lastDeposit;
    this.setState({ lastDeposit: parseInt(lastDeposit.toString()) / sunny });

    let rewards = await Utils.contract.members2(this.state.account).call();

    let levelRewards = rewards.levelRewards;
    this.setState({ levelRewards: parseInt(levelRewards.toString() / sunny) });

    let GenerationRewards = rewards.GenerationRewards;
    this.setState({ GenerationRewards: parseInt(GenerationRewards.toString() / sunny) });

    let clubRewards = rewards.clubRewards;
    this.setState({ clubRewards: parseInt(clubRewards.toString() / sunny) });

    let ultraRewards = rewards.ultraRewards;
    this.setState({ ultraRewards: parseInt(ultraRewards.toString() / sunny) });

    let bigPlayerRewards = rewards.bigPlayerRewards;
    this.setState({ bigPlayerRewards: parseInt(bigPlayerRewards.toString() / sunny) });

    let bigLeaderRewards = rewards.bigLeaderRewards;
    this.setState({ bigLeaderRewards: parseInt(bigLeaderRewards.toString() / sunny) });

    let level1Biz = rewards.level1Biz;
    this.setState({ level1Biz: parseInt(level1Biz.toString() / sunny) });

    let isClub1 = rewards.isClub1;
    this.setState({ isClub1: parseInt(isClub1.toString()) });

    let isClub2 = rewards.isClub2;
    this.setState({ isClub2: parseInt(isClub2.toString()) });

    let clubPaidTime = rewards.clubPaidTime;
    this.setState({ clubPaidTime: parseInt(clubPaidTime.toString()) });

    let refuser = await Utils.contract.teams(this.state.account).call();

    let ref1sum = refuser.ref1sum;
    this.setState({ ref1sum: parseInt(ref1sum.toString()) });

    let ref2sum = refuser.ref2sum;
    this.setState({ ref2sum: parseInt(ref2sum.toString()) });

    let ref3sum = refuser.ref3sum;
    this.setState({ ref3sum: parseInt(ref3sum.toString()) });

    let ref4sum = refuser.ref4sum;
    this.setState({ ref4sum: parseInt(ref4sum.toString()) });

    let ref5sum = refuser.ref5sum;
    this.setState({ ref5sum: parseInt(ref5sum.toString()) });

    let ref6sum = refuser.ref6sum;
    this.setState({ ref6sum: parseInt(ref6sum.toString()) });

    let ref7sum = refuser.ref7sum;
    this.setState({ ref7sum: parseInt(ref7sum.toString()) });

    let ref8sum = refuser.ref8sum;
    this.setState({ ref8sum: parseInt(ref8sum.toString()) });

    let ref9sum = refuser.ref9sum;
    this.setState({ ref9sum: parseInt(ref9sum.toString()) });

    let ref10sum = refuser.ref10sum;
    this.setState({ ref10sum: parseInt(ref10sum.toString()) });

    let timediff = 0;
    timediff = this.state.presenttime - this.state.time;
    this.setState({ timediff });

    let roi = 0;
    for (var u = 1; u <= this.state.ultraCount; u++) {
      var ultrauser = await Utils.contract.ultraUsers(u).call();
      const addressBase58 = window.tronWeb.address.fromHex(ultrauser.memberAddress);
      console.log('Ultra ' + addressBase58);

      this.setState({ ultraUsers: [...this.state.ultraUsers, ultrauser] });
    }

    var refFlag = 0;

    console.log('ref' + refLinkAddress);

    for (var d = 1; d <= this.state.depositid; d++) {
      var deposit = await Utils.contract.deposits(d).call();
      this.setState({ deposits: [...this.state.deposits, deposit] });

      const addressInBase58 = window.tronWeb.address.fromHex(deposit.memberAddress);
      // const addr = "41ada414f57f5830bc0ec67503e5b8e04394133453";
      // const newAddress = window.tronWeb.address.fromHex(addr);
      // console.log(newAddress);
      if (addressInBase58 === refLinkAddress) {
        var refLnkAddress = refLinkAddress;

        if (this.state.refFlag === 0) {
          this.setState({ refLinkAddress: refLnkAddress });
          this.state.refFlag = 1;
        }

      } else if (this.state.refFlag === 0) {
        refLnkAddress = OWNER;
        this.setState({ refLinkAddress: refLnkAddress });
        console.log('owner ' + this.state.refLinkAddress);

      }

      if (addressInBase58 === this.state.account) {

        let mydepositValue = parseInt(deposit.depositValue.toString()) / sunny;
        let mytime = parseInt(deposit.time.toString());
        let diff = this.state.presenttime - mytime;
        let diffInMin = diff / 60;
        let diffInHour = diffInMin / 60;
        let diffInDay = diffInHour / 24;
        let mycumDeposit = mydepositValue;
        let profit;

        // if (diffInHour > 100) {
        //   diffInHour = 100;
        // }

        diffInDay = diffInMin;

        if (diffInDay > 100) {
          diffInDay = 100;
        }

        for (var p = 1; p <= diffInDay; p++) {
          profit = mycumDeposit * 3 / 100;
          mycumDeposit = mycumDeposit + profit * 0.6;
          roi = roi + profit * 0.4;
        }
      }
    }

    this.setState({ roi });
    let avlBal;
    var totalRec = this.state.roi + this.state.totalRewards - this.state.totalPaid;

    if (this.state.maxRec < totalRec) {
      avlBal = this.state.maxRec - this.state.totalPaid;
      this.setState({ avlBal });

    } else {
      this.setState({ avlBal: totalRec });

    }
    //  console.log(this.state.refLinkAddress);

    this.setState({ loading: false });


  }


  invest(refid, amount) {

    return Utils.contract
      .invest(refid)
      .send({
        from: this.state.account,
        callValue: Number(amount) * 1000000,
      }).then(res => toast.success(amount + ' TRX Deposit processing', { position: toast.POSITION.TOP_RIGHT, autoClose: 10000 }))


  }

  reinvest(amount) {

    return Utils.contract
      .reinvest()
      .send({
        from: this.state.account,
        callValue: Number(amount) * 1000000,
      }).then(res => toast.success(amount + ' TRX Deposit processing', { position: toast.POSITION.TOP_RIGHT, autoClose: 10000 }))
  }

  withdraw(amount) {
    return Utils.contract
      .withdraw()
      .send({
        from: this.state.account,
      }).then(res => toast.success(amount + ' TRX Withdrawal processing', { position: toast.POSITION.TOP_RIGHT, autoClose: 10000 }))
  }


  collect(address) {
    return Utils.contract
      .collect(address)
      .send({
        from: this.state.account,
      }).then(res =>
        toast.success(' Balance updated', { position: toast.POSITION.TOP_RIGHT, autoClose: 10000 })
      );
  }

  constructor(props) {
    super(props)

    this.state = {

      account: '',
      loading: true,
      totalMembers: 0,
      balance: 0,
      refFlag: 0,
      totalInvested: 0,
      depositid: 0,
      deposits: [],
      ultraUsers: [],
      mainUsers: [],
      refLnkAddress: '',

      regTime: 0,
      depositCount: 0,

      tronWeb: {
        installed: false,
        loggedIn: false
      },
    }
    this.invest = this.invest.bind(this);
    this.reinvest = this.reinvest.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }


  render() {

    return (
      <div>
        {this.state.loading ?
          <LoadingPage /> :
          <div>
            <BrowserRouter>
              {this.state.depositCount > 0
                ? <Route path='/ref/:id' component={Child} />
                : <Route path='/' />
              }
            </BrowserRouter>
            <Top
              account={this.state.account}
              balance={this.state.balance}
              avlBalance={this.state.avlBal}
              depositCount={this.state.depositCount}
              minDepositSize={this.state.minDepositSize}
              maxDepositSize={this.state.maxDepositSize}
              lastDeposit={this.state.lastDeposit}
              requiresTronLink={!this.state.tronWeb.installed}
              refAddress={this.state.refAddress}

              refLinkAddress={this.state.refLinkAddress}
              invest={this.invest}
              reinvest={this.reinvest}
              withdraw={this.withdraw}
              collect={this.collect}
              ref1sum={this.state.ref1sum}
              ref2sum={this.state.ref2sum}
              ref3sum={this.state.ref3sum}
              ref4sum={this.state.ref4sum}
              ref5sum={this.state.ref5sum}
              ref6sum={this.state.ref6sum}
              ref7sum={this.state.ref7sum}
              ref8sum={this.state.ref8sum}
              ref9sum={this.state.ref9sum}
              ref10sum={this.state.ref10sum}

            />
            <Home
              sitetotalInvestments={this.state.sitetotalInvestments}
              totalPaid={this.state.totalPaid}
              totalRefRewards={this.state.totalRefRewards}
              totalMembers={this.state.totalMembers}
              regTime={this.state.regTime}
              totalRewards={this.state.totalRewards}
              totalInvested={this.state.totalInvested}
              avlBalance={this.state.avlBal}
              level1Count={this.state.level1Count}
            />

          </div>
        }

      </div>
    );
  }
}

export default App;
