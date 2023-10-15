package org.example.repositories;

import org.example.entities.OrderStatusEntity;
import org.example.entities.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderStatusRepository extends JpaRepository<OrderStatusEntity, Integer> {
}