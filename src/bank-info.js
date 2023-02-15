import abc from '../assets/images/banklogo/abc.svg'
import boc from '../assets/images/banklogo/boc.svg'
import bos from '../assets/images/banklogo/bos.svg'
import ccb from '../assets/images/banklogo/ccb.svg'
import ceb from '../assets/images/banklogo/ceb.svg'
import citic from '../assets/images/banklogo/citic.svg'
import cmb from '../assets/images/banklogo/cmb.svg'
import cmbc from '../assets/images/banklogo/cmbc.svg'
import comm from '../assets/images/banklogo/comm.svg'
import czb from '../assets/images/banklogo/czb.svg'
import gdb from '../assets/images/banklogo/gdb.svg'
import glb from '../assets/images/banklogo/glb.svg'
import hzcb from '../assets/images/banklogo/hzcb.svg'
import icbc from '../assets/images/banklogo/icbc.svg'
import lzccb from '../assets/images/banklogo/lzccb.svg'
import nbcb from '../assets/images/banklogo/nbcb.svg'
import qdccb from '../assets/images/banklogo/qdccb.svg'
import spabank from '../assets/images/banklogo/spabank.svg'
import spdb from '../assets/images/banklogo/spdb.svg'
import znx from '../assets/images/banklogo/znx.svg'
import bob from '../assets/images/banklogo/bob.svg'
import cib from '../assets/images/banklogo/cib.svg'
import psbc from '../assets/images/banklogo/psbc.svg'
import unionpay_online from '../assets/images/banklogo/unionpay_online.svg'
import wechatpay from '../assets/images/pay/wechatpay.svg'
import alipay from '../assets/images/pay/alipay.svg'
import unionpay_flash from '../assets/images/pay/unionpay_flash.svg'
import ecny from '../assets/images/pay/ecny.svg'

let info = [
  {name: 'abc', regExp: '(?:农行)|(?:农业银行)', logo: abc},
  {name: 'boc', regExp: '(?:中行)|(?:中国银行)', logo: boc},
  {name: 'bos', regExp: '上海银行', logo: bos},
  {name: 'ccb', regExp: '(?:建行)|(?:建设银行)', logo: ccb},
  {name: 'ceb', regExp: '光大(?:银行)?', logo: ceb},
  {name: 'citic', regExp: '中信(?:银行)?', logo: citic},
  {name: 'cmb', regExp: '招商银行', logo: cmb},
  {name: 'cmbc', regExp: '民生银行', logo: cmbc},
  {name: 'comm', regExp: '(?:交行)|(?:交通银行)', logo: comm},
  {name: 'czb', regExp: '浙商银行', logo: czb},
  {name: 'gdb', regExp: '广发(?:银行)?', logo: gdb},
  {name: 'glb', regExp: '桂林银行', logo: glb},
  {name: 'hzcb', regExp: '杭州银行', logo: hzcb},
  {name: 'icbc', regExp: '(?:工行)|(?:工商银行)', logo: icbc},
  {name: 'lzccb', regExp: '(?:柳州银行)|(?:柳江柳银村镇银行)', logo: lzccb},
  {name: 'nbcb', regExp: '宁波银行', logo: nbcb},
  {name: 'qdccb', regExp: '青岛银行', logo: qdccb},
  {name: 'spabank', regExp: '平安(?:银行)?', logo: spabank},
  {name: 'spdb', regExp: '浦发(?:银行)?', logo: spdb},
  {name: 'znx', regExp: '浙江农.*', logo: znx},
  {name: 'bob', regExp: '北京银行', logo: bob},
  {name: 'cib', regExp: '兴业银行', logo: cib},
  {name: 'psbc', regExp: '(?:邮储银行)|(?:邮政储蓄银行)', logo: psbc},
  {name: 'unionpay_online', regExp: '银联', logo: unionpay_online},
  {name: 'wechatpay', regExp: '微信支付', logo: wechatpay},
  {name: 'alipay', regExp: '支付宝', logo: alipay},
  {name: 'unionpay_flash', regExp: '云闪付', logo: unionpay_flash},
  {name: 'ecny', regExp: '数字人民币', logo: ecny}
]

export default info