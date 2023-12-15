//==============================Cookie
/**
 * sunucudan alınana küçük bilgi parçalarını tarayıcıda saklanmasına olanak tanır
 * aynı web sitesi farklı tarayıcılarda farklı cookieler kullanabilir
 * 4kb a kadar veri saklayabilir
 * son kullanım tarihi vardır
 * güvenlik tarıfından zayıftır manipüle edilebilir
 * tarayıcı bir istek yaparken cookie yi sunucuya gönderir
 * 
 * oturum yönetimi, tercihleri hatırlama, izleme, reklam ve kişiselleştirme gibi yöntemler için kullanılır
 */
// Cookie oluşturma
// document.cookie = "username=Aziz Senturk; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";

// Cookie okuma
// var username = document.cookie;
// console.log(username);



//==============================LocalStorage
/**
 * veriler kullanıcı silmedikce kalıcı olarak anahtar değer çifti biçiminde depolanır
 * aynı web sitesi farklı tarayıcılarda aynı verilere erişilemez
 * 5mb veri saklanabilir
 * sunucu ile doğrudan iletişim gerektirmez sadece istemci tarafında kullanıcılır
 * tarayıcı seviyesinde güvenlik sağlar ve diğer alanlara erişimi engeller
 * cross-site-scripting(xss) saldırılarına karşı hassas olaiblir
 */

// Local storage'a veri ekleme
// localStorage.setItem("username", "Aziz Senturk");

// Local storage'dan veri okuma
// var username = localStorage.getItem("username");
// console.log(username);


//==============================Session
/**
 * sunucu tarafında depolanmaktadır. kullanıcının web sitesi ile etkileşim halindeyekn geçici olaraksaklanana verileridir
 * kullanıcıının vir oturumu başlatıldığında oluşturulur ve bir oturum kimliği(sessiın ID) ile ilişkilendirilir
 * kullanıcının tarayıcına sadece oturum kimliği gönderilir
 * oturum kullanıcı tarayıcıyı kapattığında veya belirli bir süre etkin olmadığında sona erer.
 * 5mb kadar veri saklar
 * sunucu tarında bilgilerin saklanmasından dolayı her istekde sınucu ile iletişim gerekkli
 * sunucu taraflı olduğundan manipüle edilme riski düşüktür
 * Kullanıcı tarayıcı penceresini kapattığında veriler temizlenecektir. Veriler asla sunucuya gönderilmeyecektir.
 */

// Session storage ve local storage 5 temel methoda sahiptir. Bunlar;

// setItem()
// getItem()
// removeItem()
// key()
// clear()


//   Cookie ve Local Storage verileri tarayıcı tarafında,
//   Session verisi ise sunucu tarafında depolanır.
//   Genellikle, Cookie’ler kullanıcı etkileşimlerini
//   hatırlamak ve izlemek için kullanılırken, Local
//   Storage verileri daha kalıcı bilgileri saklamak için
//   kullanılır. Session ise oturum durumunu yönetmek ve
//   yetkilendirme işlemleri için kullanılır.



