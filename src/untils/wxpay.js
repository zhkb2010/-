import jsrsasign from 'jsrsasign'

// wx生成签名
export function createSign(data) {
  var newStr = "";
  for (var obj in data) {
    newStr += data[obj] + "\n"
  }
  let rsa = new jsrsasign.RSAKey();
  const k = `-----BEGIN PRIVATE KEY-----
      MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDKpPpUSp3N6tYg
      XYug3+UPwfraptXOF4d4PO+4FzcegaH/EKedH1Yd3isZIor/QNyhiufQN3tB9VLp
      sCmoNckJ6PYQrYCqj5ivlRUAkXp5rGkjkvJz5o7c2TX+ZJZRj0Tco3h6tLuoI8xU
      9e4Jzb2trUnQArirLGdft7lJOOv87mHWZA7elCtSURbYoM9YG2TtDfcaj+ktvSep
      8gKooiA05E6YPUuN7GeLEzD9AtRABq8NoRuz3hje4wUF8WYwYqZEw3zlSTZdd/qR
      Cb5xYjIh/EBmixUfDtkJiW/onBr1u48R4es0hVVDT5K668r1KPzRwJxd4JWVV6Y8
      KnBFRCl/AgMBAAECggEBAJFvZAW445aUswbZfEuCRMhRZLMmR444zs4ZlcYeSz3G
      tbf0gQdAJTMcbvwEEZPuPipmIccK+pg09EOpXcxOhbFqE6eWjiBbHK7vJPqabjcC
      6RZR8VYDI4cXESw5jrSMSVS8scwHCCM9Rfm34xYAJeCO3MnAGj8niC1nE0Cc7KlC
      ORNYUArYJoeRhTrz5WXFQU7fMfcrLHKyBBjIFsIpEgtlIqvOQjlVFyqRRVOzPv34
      9mCskq6OT+TzMLBVbvWqqLW3A4GeTPae+JCr7mbXyrLTWwH0a/h9YJ0NYYSIyUCZ
      41E/p/boVO1tSUrjIY+mht/Xhq4fDKBF8E21RWrRDDECgYEA9Enyg/PfGHlE9AyJ
      j0zG+XCzCA6wP9tvDRfcgXlC8/IuNRltD/WjqmIUM6hbAyDEE9md+VCeXJYDfKel
      4f1iqzr4mhzIxYA9kgKtWIUKllwNSHBkTC773tR80ZvUO5ecsn+BJakrsGfjQePj
      AKYTTBP+tAUP0bRFsjld1ygIWVkCgYEA1FvyS1sATopB/5+iOqFqZxkkVTttIEuf
      0ow6AZmdg1pgHVU0NIWBQltrubtYqLxVOVmP5JcGo3baZY26WeA08ShZgxc3RU/J
      oi403fQaP9YTjkLzruwBqdTrXCpb7tbco9oirJHlbPus+5FAHm7vbMq4TF1r6YqS
      HxkDbuTuZpcCgYAgt1qUU2/Ybj1O1fMCTw0C0RYZCSaPlsq7nSt554yQ8SlBEUOq
      9IHTysjb1jtCIvw/kFB42FQtICYdZrJvnqi9N+udcCdvU+prCJLAnSi61F8vCWZV
      UaGHyTtiMxVsWbSxryPTsGFagb9MzsFTD+rbsH3XDCp/Mj53TPmFXCYqGQKBgQCE
      w7tWq10kvUGH3DijqTkJneleNBoEn+Ma0jqNt4mHjqAalqNd1r26S8esxdknHR+3
      DCxvAJDQ78SYyyPfftH6l3xm/cO7XKe18mdxAGTM1j1BqtAI41oi4JAI/h6d0sz8
      z6rv8wLZwPskCGpq3HZpsM/KRnnp941lTdEcqpn1nwKBgQC8TlH4laq1BKciP/ZA
      ZlxOkJ1EIEIG2Ds5V1Cr7JysdLO5rLt1U192TLTfNR3+Wsq45RuUiqCi9l/5haBs
      kJbeucVLZOCZ5Z1iVw0scOyR3prhaVm1qmghn19p0fi7jyTPGQuaR+ik3g2jo2MC
      bOMFh/n8A6+cq9gA2tt2DBDJKA==
      -----END PRIVATE KEY-----` // SHA256withRSA私钥
  rsa = jsrsasign.KEYUTIL.getKey(k)
  const sig = new jsrsasign.KJUR.crypto.Signature({
    alg: 'SHA256withRSA'
  })
  sig.init(rsa)
  sig.updateString(newStr)
  const sign = jsrsasign.hextob64(sig.sign())
  return sign
}

// wx code解析
export function getUrlParam(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

// 生成随机字符串
export function getRandom() {
  var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    num = "";
  for (var i = 0; i < 32; i++) {
    num += arr[parseInt(Math.random() * 36)];
  }
  return num;
}