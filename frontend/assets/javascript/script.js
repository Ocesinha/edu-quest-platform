
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMobile = document.querySelector('.nav-mobile');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMobile.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    navMobile.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            });
        });


        const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        document.querySelectorAll('.toggle-password').forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const eyeOpen = this.querySelector('.eye-open');
                const eyeClosed = this.querySelector('.eye-closed');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    eyeOpen.style.display = 'none';
                    eyeClosed.style.display = 'block';
                } else {
                    input.type = 'password';
                    eyeOpen.style.display = 'block';
                    eyeClosed.style.display = 'none';
                }
            });
        });

        document.querySelectorAll('.toggle-password').forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const eyeOpen = this.querySelector('.eye-open');
                const eyeClosed = this.querySelector('.eye-closed');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    eyeOpen.style.display = 'none';
                    eyeClosed.style.display = 'block';
                } else {
                    input.type = 'password';
                    eyeOpen.style.display = 'block';
                    eyeClosed.style.display = 'none';
                }
            });
        });

        const passwordInput = document.getElementById('password');
        const strengthFill = document.querySelector('.strength-fill');
        const strengthText = document.querySelector('.strength-text');

        if (passwordInput) {
            passwordInput.addEventListener('input', function() {
                const password = this.value;
                let strength = 0;
                
                if (password.length >= 8) strength += 25;
                if (password.match(/[a-z]/)) strength += 25;
                if (password.match(/[A-Z]/)) strength += 25;
                if (password.match(/[0-9]/) || password.match(/[^a-zA-Z0-9]/)) strength += 25;
                
                strengthFill.style.width = strength + '%';
                
                if (strength <= 25) {
                    strengthFill.style.background = '#ef4444';
                    strengthText.textContent = 'Senha fraca';
                } else if (strength <= 50) {
                    strengthFill.style.background = '#f59e0b';
                    strengthText.textContent = 'Senha media';
                } else if (strength <= 75) {
                    strengthFill.style.background = '#3b82f6';
                    strengthText.textContent = 'Senha boa';
                } else {
                    strengthFill.style.background = '#10b981';
                    strengthText.textContent = 'Senha forte';
                }
            });
        }
           function closeNotification(id) {
        const notification = document.getElementById(id);
        if (notification) {
            notification.classList.add('notification-hiding');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }

    // Auto-close notifications after 5 seconds
    document.addEventListener('DOMContentLoaded', function() {
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            setTimeout(() => {
                notification.classList.add('notification-hiding');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 5000);
        });
    });

    // =========================
// Sidebar e User Menu
// =========================
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuToggle = document.getElementById('menuToggle');
const sidebarClose = document.getElementById('sidebarClose');

function toggleSidebar() {
  sidebar?.classList.toggle('active');
  sidebarOverlay?.classList.toggle('active');
}

menuToggle?.addEventListener('click', toggleSidebar);
sidebarClose?.addEventListener('click', toggleSidebar);
sidebarOverlay?.addEventListener('click', toggleSidebar);

const userMenuToggle = document.getElementById('userMenuToggle');
const userDropdown = document.getElementById('userDropdown');

userMenuToggle?.addEventListener('click', e => {
  e.stopPropagation();
  userDropdown?.classList.toggle('active');
});

document.addEventListener('click', e => {
  if (
    userDropdown &&
    !userMenuToggle?.contains(e.target) &&
    !userDropdown.contains(e.target)
  ) {
    userDropdown.classList.remove('active');
  }
});

