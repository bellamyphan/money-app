package com.bellamyphan.moneyapp.money_app_api.controller;

import com.bellamyphan.moneyapp.money_app_api.model.Transaction;
import com.bellamyphan.moneyapp.money_app_api.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/transactions")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;

    // Get all transactions
    @GetMapping
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }
}
