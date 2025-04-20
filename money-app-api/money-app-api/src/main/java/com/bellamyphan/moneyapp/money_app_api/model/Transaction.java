package com.bellamyphan.moneyapp.money_app_api.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "transactions")
@Getter
@Setter
@NoArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "date")
    private LocalDate date;
    @Column(name = "amount")
    private Double amount;
    @Column(name = "type")
    private String type;
    @Column(name = "notes")
    private String notes;
    @Column(name = "bank")
    private String bank;

    // Constructor without ID
    public Transaction(LocalDate date, Double amount, String type, String notes, String bank) {
        this.date = date;
        this.amount = amount;
        this.type = type;
        this.notes = notes;
        this.bank = bank;
    }
}
