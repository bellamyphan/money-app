package com.bellamyphan.moneyapp.money_app_api.repository;

import com.bellamyphan.moneyapp.money_app_api.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    // Custom query methods can be defined here if needed
    // For example, find transactions by date, amount, etc.
}
