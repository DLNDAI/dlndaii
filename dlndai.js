const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};

var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";var dlndai={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2024-04-12T01:04:18Z",purchase_date:"2024-04-12T01:04:17Z",store:"app_store"},dlndai={grace_period_expires_date:null,purchase_date:"2024-04-12T01:04:17Z",product_identifier:"com.dlndaii.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(dlndai.product_identifier=s,obj.subscriber.subscriptions[s]=dlndaii):obj.subscriber.subscriptions["com.dlndaii.premium.yearly"]=dlndaii,obj.subscriber.entitlements[e]=dlndai}else obj.subscriber.subscriptions["com.dlndaii.premium.yearly"]=dlndaii,obj.subscriber.entitlements.pro=dlndai;$done({body:JSON.stringify(obj)});
