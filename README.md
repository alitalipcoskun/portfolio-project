# Portfolyo Web Sitesi Projesi

Bu projede kendime ait bir portfolyo web sitesi tasarlamayı amaçlıyorum.

## Başlangıç

Projeyi yerel makinenize klonladıktan sonra, değişiklikleri containera taşıyabilmek için aşağıdaki adımları izleyebilirsiniz.

### Geliştirme Ortamını Kurma

### Next.js ve Tailwind.css Kurulumu
1. Projeyi oluşturma

    ```
    npx create-next-app@latest
    ```

    komutu gerekli dizinde koşulur ve Typescript seçeneği hariç hepsini içeren proje elde edilir.

### Container oluşturma

1. Proje dizinine gidin:

    ```bash
    cd <proje-dizin-adi>
    ```

2. Docker imajını oluşturun:

    ```bash
    docker build -t portfolio .
    ```

3. Docker container'ını çalıştırın:

    ```bash
    docker run -p 3000:3000 portfolio
    ```

Bu komutlar, Next.js projesi için hazırlanmış Dockerfile ile container içinde geliştirmeye başlamanızı sağlar.

## Proje Hakkında

Bu proje, modern web teknolojileri kullanarak kendi portfolyo web sitemi oluşturmayı hedeflediğim bir çalışmadır.

### Kullanılan Teknolojiler

1. Next.js
2. Tailwind.css
3. shacn/ui
