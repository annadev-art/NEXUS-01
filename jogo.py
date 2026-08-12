import random

melhor_pontuacao = 0

while True:

    print()
    print("╔════════════════════════════╗")
    print("║    🎮 JOGO DE ADIVINHAÇÃO ║")
    print("║                            ║")
    print("║       [1] ▶ JOGAR          ║")
    print("║       [2] 📖 COMO JOGAR    ║")
    print("║       [3] 🚪 SAIR          ║")
    print("║                            ║")
    print("╚════════════════════════════╝")

    opcao = input("Escolha: ")

    if opcao == "2":
        print()
        print("📖 COMO JOGAR")
        print("O computador escolhe um número secreto.")
        print("Você deve tentar descobrir qual é.")
        print("Eu vou dizer se o número é maior ou menor.")
        print("Quanto menos tentativas, maior sua pontuação!")
        input("Pressione Enter para voltar ao menu.")

    elif opcao == "3":
        print("👋 Até a próxima!")
        break

    elif opcao == "1":

        print()
        print("Escolha a dificuldade:")
        print("[1] 🟢 Fácil — 1 a 50")
        print("[2] 🟡 Médio — 1 a 100")
        print("[3] 🔴 Difícil — 1 a 500")

        dificuldade = input("Escolha: ")

        if dificuldade == "1":
            limite = 50
            pontos_base = 100
        elif dificuldade == "2":
            limite = 100
            pontos_base = 200
        elif dificuldade == "3":
            limite = 500
            pontos_base = 500
        else:
            print("❌ Opção inválida!")
            continue

        numero_secreto = random.randint(1, limite)
        tentativas = 0

        while True:
            palpite = int(input("Digite seu palpite: "))
            tentativas += 1

            if palpite == numero_secreto:
                pontuacao = pontos_base - (tentativas * 10)

                if pontuacao < 0:
                    pontuacao = 0

                if pontuacao > melhor_pontuacao:
                    melhor_pontuacao = pontuacao

                print("🎉 Você acertou!")
                print(f"🎯 Tentativas: {tentativas}")
                print(f"🏆 Pontuação: {pontuacao}")
                print(f"🥇 Melhor pontuação: {melhor_pontuacao}")
                break

            elif palpite < numero_secreto:
                print("⬆️ O número é maior!")

            else:
                print("⬇️ O número é menor!")

        jogar_novamente = input("🔄 Jogar novamente? [s/n]: ")

        if jogar_novamente.lower() != "s":
            print("👋 Obrigada por jogar!")
            break

    else:
        print("❌ Opção inválida!")
