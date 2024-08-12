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

Avoiding conflicts in containers:

Run this commands first:
1. docker rm app 
2. docker volume rm nodemodules
3. docker stop $(docker ps -aq)
4. docker rm $(docker ps -aq)

After that, run the following commands to create a real-time development environment.

1. docker build -t  . nextjs-with-shadcnui-portfolio
2. docker volume create --name nodemodules

3. docker run -u=3000:3000 -v $(pwd):/app -w=/app -d -p 3000:3000 --rm --name=nodedev node bash -c "npm install && npm run dev"

Bu komutlar, Next.js projesi için hazırlanmış Dockerfile ile container içinde geliştirmeye başlamanızı sağlar.

## Proje Hakkında

Bu proje, modern web teknolojileri kullanarak kendi portfolyo web sitemi oluşturmayı hedeflediğim bir çalışmadır.

### Kullanılan Teknolojiler

1. Next.js
2. Tailwind.css
3. shadcn/ui
