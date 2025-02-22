// ========= ID ========= //
const mapping = { 
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  dlndai ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";var dlndaiSubscription={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2025-01-01T00:00:00Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2025-01-01T00:00:00Z",purchase_date:"2025-01-01T00:00:00Z",store:"app_store"},dlndaiEntitlement={grace_period_expires_date:null,purchase_date:"2025-01-01T00:00:00Z",product_identifier:"com.dlndai.premium.yearly",expires_date:"2025-01-01T00:00:00Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(dlndaiEntitlement.product_identifier=s,obj.subscriber.subscriptions[s]=dlndaiSubscription):obj.subscriber.subscriptions["com.dlndai.premium.yearly"]=dlndaiSubscription,obj.subscriber.entitlements[e]=dlndaiEntitlement}else obj.subscriber.subscriptions["com.dlndai.premium.yearly"]=dlndaiSubscription,obj.subscriber.entitlements.pro=dlndaiEntitlement;$done({body:JSON.stringify(obj)});
