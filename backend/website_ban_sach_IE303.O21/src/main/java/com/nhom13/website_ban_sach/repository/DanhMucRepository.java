package com.nhom13.website_ban_sach.repository;

import com.nhom13.website_ban_sach.entity.DanhMuc;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DanhMucRepository extends JpaRepository<DanhMuc, Long> {
//    @Override
//    Optional<DanhMuc> findById(Long aLong);
}
