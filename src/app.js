import fetch from 'node-fetch';
import { Telegraf } from 'telegraf';
import * as dotenv from "dotenv";
dotenv.config();

//const { Telegraf } = require('telegraf');

// there are two ways to go about making crypto payments possible on this program
//users when they join the group if they want to opt in for digital payments give their wallet address 
// this makes it so their tg handle has a wallet associated
// /letssendsoemcoin @myfirendtimmy - window.open( hhttps:myexternalwebapp)
// on opening the app it queries for the tg handle and associated wallet address
// contructs a transaction screen to fill out and submit through their browser wallet
const Telegramkey = process.env.TGAPIKEY
/// you would have to host an api or data source with the wallet address, and tg handle.... unless tg could handle that and you could query? no....
const bot = new Telegraf(Telegramkey); 
//old testingbot = 5289510609:AAEewlvji9smtvpNziaorm72IDgq0HuzIcs
async function Stats() {
    const Ethstats = fetch('https://api.ethplorer.io/getTokenInfo/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2?apiKey=EK-pHhzD-K23vfE9-d9bYq', {
        method: 'GET'
      })
        .then(res => res.json())
        .then(res => JSON.stringify(res))
        .catch(err => console.log(err));
        const RealEth =  await Ethstats
        const test = JSON.stringify(RealEth);
        return RealEth

}

async function EthPrice() {
    const Ethstats = fetch('https://api.ethplorer.io/getTokenInfo/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2?apiKey=EK-pHhzD-K23vfE9-d9bYq', {
        method: 'GET'
      })
        .then(res => res.json())
        .catch(err => console.log(err));
        const RealEth =  await Ethstats
        const PriceUnformatted = RealEth.price.rate
        const Price = PriceUnformatted.toFixed(2);
        return Price

}



const stats =  await Stats();
const EthPriceTG = await EthPrice();

//method for invoking start command
 
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello friend, welcome to the future', {
    })
});


bot.command('faucet', ctx => {
    console.log(ctx.from)
    Stats()
    bot.telegram.sendMessage(ctx.chat.id, "https://faucets.chain.link/", {
    })
});

bot.command('ETHStats', ctx => {
    console.log(ctx.from)
    Stats()
    bot.telegram.sendMessage(ctx.chat.id, stats, {
    })
});


bot.command('store', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, ' Click the llink in this message to enter the store @cascadiabot')
});
bot.command('gitcommands', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, ' Click the llink in this message to enter the store @cascadiabot')
});
bot.command('ethresourcelist', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, ' https://github.com/ConsenSys/ethereum-developer-tools-list/blob/master/README.md' + 'https://awesomeopensource.com/project/OffcierCia/DeFi-Developer-Road-Map#front-end')
});

bot.command('abiencoding', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, ' https://abi.hashex.org/')
});

bot.command('nftjsonhosting', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, ' https://my-json-server.typicode.com')
});

bot.command('templatecontracts', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, "https://github.com/connerstakein/staking-contract", {
    })
});

bot.command('ethprice', ctx => {
    console.log(ctx.from)
    EthPrice()
    bot.telegram.sendMessage(ctx.chat.id, "$" + EthPriceTG + " Is the Current Ethereum Price", {
    })
});

bot.command('Website', ctx => {
    console.log(ctx.from)
    EthPrice()
    bot.telegram.sendMessage(ctx.chat.id, " Click the link below titled Cascadiapp on you Telegram application, or go to https://cascadiafinance.io", {
    })
});








//method to start get the script to pulling updates for telegram 

bot.launch();

