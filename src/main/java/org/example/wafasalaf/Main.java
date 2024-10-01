package org.example.wafasalaf;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class Main {

    public static void main(String[] args) {


        EntityManagerFactory emf = Persistence.createEntityManagerFactory("my-persistence-unit");
        EntityManager em = emf.createEntityManager();
        try{ em.getTransaction().begin();
        em.getTransaction().commit();}
         finally {
            em.close();
        }

    }
}
