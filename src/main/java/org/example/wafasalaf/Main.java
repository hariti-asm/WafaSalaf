package org.example.wafasalaf;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.hibernate.jpa.HibernatePersistenceProvider;
import persistence.CustomPersistenceUnitInfo;

import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

EntityManagerFactory emf = new HibernatePersistenceProvider().createContainerEntityManagerFactory(new CustomPersistenceUnitInfo(), new HashMap<>());
        EntityManager em = emf.createEntityManager();
        try{ em.getTransaction().begin();
        em.getTransaction().commit();}
         finally {
            em.close();
        }

    }
}
