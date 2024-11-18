package model

type GetSekolah struct {
	Nama_Sekolah      string `json:"nama_sekolah"`
	Alamat_Sekolah    string `json:"alamat_sekolah"`
	Deskripsi_Sekolah string `json:"deskripsi_sekolah"`
}

type GetAllSekolah struct {
	Nama_Sekolah   string `json:"nama_sekolah"`
	Alamat_Sekolah string `json:"alamat_sekolah"`
}

type CreateSekolah struct {
	Nama_Sekolah      string `json:"nama_sekolah" binding:"required"`
	Alamat_Sekolah    string `json:"alamat_sekolah" binding:"required"`
	Deskripsi_Sekolah string `json:"deskripsi_sekolah" binding:"required"`
	ID_Kepemilikan    int    `json:"id_kepemilikan" binding:"required"`
}

type CreateSekolahResponse struct {
	Nama_Sekolah      string `json:"nama_sekolah"`
	Alamat_Sekolah    string `json:"alamat_sekolah"`
	Deskripsi_Sekolah string `json:"deskripsi_sekolah"`
	ID_Kepemilikan    int    `json:"id_kepemilikan"`
}
