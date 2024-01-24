export default function formatCentsValue(valueCents) {
  // Converter para reais dividindo por 100
  let valueReais = valueCents / 100;

  // Formatar o valor para o formato de moeda brasileira (R$)
  return valueReais.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
