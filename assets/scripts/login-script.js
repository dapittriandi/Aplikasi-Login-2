/* @Module Login-Script */
/**
* Membuat variabel loginFormElement untuk tampilan form.
*@Constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/** 
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/** 
* Membuat variabel inputEmailElement untuk tampilan input Password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
 * Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
 * @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';

/** 
 * Membuat variabel expectedEmail untuk menyimpan informasi Password sementara.
 * @constant {string}
 */
const expectedPassword = 'superpassword';

/* Comment :  Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /** 
   * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
   * @constant {string}
   */
  const email = inputEmailElement.value;

  /** 
   * Membuat variabel password untuk menyimpan nilai email yang didapatkan saat button ditekan.
   * @constant {string}
   */
  const password = inputPasswordElement.value;

  /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {

    /* Comment : Jika tidak sesuai maka program akan menampilkan infromasi bahwa input salah. */
    showPopUp();
  }
});
