window.onload = function () {
    document.getElementById('dnslog-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const domain = document.getElementById('domain').value;

        // 调试：查看传递的域名
        console.log(domain);

        fetch(`http://localhost:5000/log_dns?domain=${domain}`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('result').innerText = `查询结果: ${data}`;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
    createStar();
};


// 创建星星的函数
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star', 'floating');

    // 设置随机位置
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 90 + 'vh';

    // 设置随机大小
    const size = Math.random() * 10 + 1; // 1px到3px
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    // 设置随机动画持续时间和浮动距离
    const duration = Math.random() * 10 + 3 + 's'; // 3s到6s
    const distance = Math.random() * 20 + 10 + 'px'; // 10px到30px

    // 应用随机化的动画持续时间和浮动距离
    star.style.animation = `float ${duration} infinite ease-in-out`;
    star.style.animationName = 'float';
    star.style.animationDuration = duration;
    star.style.transform = `translateY(${Math.random() > 0.5 ? '-' + distance : distance})`;

    // 添加到页面
    document.body.appendChild(star);

    // 移除星星，防止内存泄漏
    star.addEventListener('animationend', function () {
        star.remove();
    });
}

// 根据页面大小创建一定数量的星星
function initStars() {
    const numberOfStars = 100; // 可以根据需要调整星星的数量
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }
}

// 页面加载完成后初始化星星
window.onload = initStars;
