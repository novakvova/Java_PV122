package org.example;

import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //answer();
        //ArrayExample();
        Person p = Person
                .builder()
                .name("Католик Петро")
                .age(32)
                .sex(true)
                .build();
//        p.setName("Терешко");
//        p.setAge(22);
//        p.setSex(true);
        System.out.println(p);
    }

    public static void ArrayExample() {
        int min = 10;
        int max = 20;
        int n =  RandomMarge(1,10);

        int []mas = new int[n];
        for (int i=0;i<mas.length; i++) {
            mas[i]=RandomMarge(1,100);
        }
        for(var item : mas) {
            System.out.print(item+"\t");
        }
    }

    public static int RandomMarge(int min, int max) {
        Random random = new Random();
        return random.nextInt(max - min + 1) + min;
    }
    public static void answer() {
        Scanner in = new Scanner(System.in);
        String str = "Коли почалася 2 світова?\n";
        System.out.printf("%s", str);
        System.out.println("1. 1939");
        System.out.println("2. 1941");
        System.out.println("3. 1948");
        System.out.print("->_");
        String answer;
        answer = in.nextLine();
        if(answer.equals("1")) {
            System.out.println("Ви вгадали :)");
            return;
        }
        System.out.println("Вчи історію Юхим :(");
    }
}