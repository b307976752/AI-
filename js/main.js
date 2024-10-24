// 获取DOM元素
const agreeCheckbox = document.getElementById('agreeCheckbox');
const confirmButton = document.getElementById('confirmButton');
const agreementSection = document.getElementById('agreementSection');
const paymentSection = document.getElementById('paymentSection');
const backButton = document.getElementById('backButton');
const paymentOptions = document.querySelectorAll('.payment-option');
const monthlyQRSection = document.getElementById('monthlyQRSection');
const yearlyQRSection = document.getElementById('yearlyQRSection');

// 复选框状态改变时更新按钮状态
agreeCheckbox.addEventListener('change', function() {
    confirmButton.disabled = !this.checked;
});

// 点击确认按钮显示支付界面
confirmButton.addEventListener('click', function() {
    agreementSection.style.display = 'none';
    agreeCheckbox.parentElement.style.display = 'none';
    confirmButton.style.display = 'none';
    paymentSection.style.display = 'block';
});

// 返回按钮功能
backButton.addEventListener('click', function() {
    agreementSection.style.display = 'block';
    agreeCheckbox.parentElement.style.display = 'flex';
    confirmButton.style.display = 'block';
    paymentSection.style.display = 'none';
    // 重置支付选项状态
    paymentOptions.forEach(option => option.classList.remove('selected'));
    monthlyQRSection.style.display = 'none';
    yearlyQRSection.style.display = 'none';
});

// 支付选项切换
paymentOptions.forEach(option => {
    option.addEventListener('click', function() {
        // 移除其他选项的选中状态
        paymentOptions.forEach(opt => opt.classList.remove('selected'));
        // 添加当前选项的选中状态
        this.classList.add('selected');
        
        // 显示对应的支付二维码
        if(this.dataset.plan === 'monthly') {
            monthlyQRSection.style.display = 'block';
            yearlyQRSection.style.display = 'none';
        } else {
            monthlyQRSection.style.display = 'none';
            yearlyQRSection.style.display = 'block';
        }
    });
});
