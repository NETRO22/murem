document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Limpar erros anteriores
    clearErrors();

    // Obter valores dos campos
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const renda = document.getElementById('renda').value;

    // Validação dos campos
    let isValid = true;

    if (!validatePhoneNumber(telefone)) {
        showError('telefoneError', 'Telefone inválido. Formato esperado: (xx) xxxxx-xxxx');
        isValid = false;
    }

    if (!validateCPF(cpf)) {
        showError('cpfError', 'CPF inválido. Formato esperado: xxx.xxx.xxx-xx');
        isValid = false;
    }

    if (endereco.trim() === '') {
        showError('enderecoError', 'Endereço é obrigatório.');
        isValid = false;
    }

    if (!validateIncome(renda)) {
        showError('rendaError', 'Renda inválida. Deve ser um valor numérico.');
        isValid = false;
    }

    if (isValid) {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar o código para enviar o formulário, se necessário
    }
});

function validatePhoneNumber(phone) {
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return phoneRegex.test(phone);
}

function validateCPF(cpf) {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

function validateIncome(income) {
    const incomeRegex = /^\d+(\.\d{1,2})?$/;
    return incomeRegex.test(income);
}

function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.innerText = '');
}
