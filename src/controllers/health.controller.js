export function health (req, res){
    res.status(200).json({
        ok: true,
        service: "test-api-simples"
    });
}